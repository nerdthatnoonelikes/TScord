import WebSocketManager from "../ws/WebSocketManager"
import {EventEmitter} from "events";

export default class Client extends EventEmitter {
    // @ts-ignore
    private socket: WebSocketManager = new WebSocketManager(this)

    async login(token: string) {
        this.socket.login(token)
    }
    
}