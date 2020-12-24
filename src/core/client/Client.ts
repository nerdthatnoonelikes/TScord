import WebSocketManager from "../ws/WebSocketManager"
import {EventEmitter} from "events";

import { APIHandler  } from "../client/API/APIHandler";

export class Client extends EventEmitter {
    public token;
    private socket: WebSocketManager = new WebSocketManager(this)

    public handler: APIHandler = new APIHandler(this);

    constructor(token: string) {
        super();
        this.token = token
    }
    async login() {
        this.socket.login(this.token)
    }
}
