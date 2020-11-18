import WebSocketManager from "../ws/WebSocketManager"
import {EventEmitter} from "events";
import { RestAPI } from "./API/RestAPI";

export class Client extends EventEmitter {
    public token;
    private socket: WebSocketManager = new WebSocketManager(this)

    public rest: RestAPI = new RestAPI(this);

    constructor(token: string) {
        super();
        this.token = token
    }
    async login() {
        this.socket.login(this.token)
    }
    
    
}