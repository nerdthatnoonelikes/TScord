import WebSocket from "ws";
import {Payload} from "../../constants/Payloads"
import {OPCODE} from "../../constants/Constants"
import Client from "../client/Client";

export default class WebSocketManager {
    private socket!: WebSocket
    
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
    
        this.socket.on("open", () => {
            //console.log("connected")
        })
        
        this.socket.onopen = () => {
            setInterval(() => {
                this.socket.send(JSON.stringify(identify))
            }, 41250)
        }
    
        this.socket.on("message", async message => {
            const payload: Payload = JSON.parse(message.toString())
            const {t:event, s, op, d} = payload
           // console.log(payload)
            switch (payload.op) {
                case OPCODE.ZERO:
                    //console.log("an event was triggered")
                    break;
                case OPCODE.TEN:
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

}

