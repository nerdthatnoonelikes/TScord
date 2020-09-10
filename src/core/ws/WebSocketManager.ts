import WebSocket from "ws";

export default class WebSocketManager {
    private socket!: WebSocket


     async login(token: string) {
        const properties = { $os: 'linux', $browser: 'tscord', $device: 'tscord'}
        const identify = {
          op: 2,
          d: { token, properties }
        };
    
        const GATEWAY = "wss://gateway.discord.gg/?v=6&encoding=json";
    
        this.socket = await new WebSocket(GATEWAY);
    
        this.socket.on("open", () => {
            console.log("connected")
        })
        
        this.socket.onopen = () => {
            setInterval(() => {
                this.socket.send(JSON.stringify(identify))
            }, 41250)
        }
    
        this.socket.on("message", message => {
            console.log(JSON.parse(message.toString()))
        })
    }

}

