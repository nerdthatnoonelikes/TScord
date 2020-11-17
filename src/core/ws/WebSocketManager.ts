import WebSocket from "ws";
import {Payload, Heartbeat, Identify} from "../../constants/Payloads"
import {OPCODE} from "../../constants/Constants"
import {Client} from "../client/Client";

export default class WebSocketManager {
    private socket!: WebSocket
    private interval: any;
    
    constructor(private client: Client) {

    }


     async login(token: string) {
        const properties = { $os: 'linux', $browser: 'nerdcord', $device: 'nerdcord'}
        const identify = {
          op: 2,
          d: { token, properties }
        };
    
        const GATEWAY = "wss://gateway.discord.gg/?v=6&encoding=json";
    
        this.socket = await new WebSocket(GATEWAY);
    
        this.socket.on("message", async message => {
            const payload: Payload = JSON.parse(message.toString())
            const {t:event, s, op, d} = payload
            const {heartbeat_interval} = d
            switch (payload.op) {
                case OPCODE.ZERO:
                    break;
                case OPCODE.TEN:
                    this.interval = this.heartbeat(heartbeat_interval)
                    await this.identify(token)
                    break;
                case OPCODE.ELEVEN:
                    break;
            }
            if (event) {
                try {
                    const {default: module} = await import(`../handlers/${event}`)
                    module(this.client, payload)
                } catch (e) {
                    console.log(e)
                }
            }
            
        })
    }

    heartbeat(ms: number) {
        return setInterval(() => {
            this.socket.send(JSON.stringify(Heartbeat))
        }, ms)
    }

    async identify(token: string) {
        Identify.d.token = token
        return this.socket.send(JSON.stringify(Identify))
    }

}

