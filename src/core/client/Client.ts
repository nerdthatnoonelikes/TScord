import WebSocketManager from "../ws/WebSocketManager"
import {EventEmitter} from "events";
import fetch from "node-fetch";
import {
    Constants
} from "../../constants/Constants"

export default class Client extends EventEmitter {
    // @ts-ignore
    public token;
    private socket: WebSocketManager = new WebSocketManager(this)

    constructor(token: string) {
        super();
        this.token = token
        this.login(token)
    }
    async login(token: string) {
        if (!token) throw new Error("please provide a token")
        this.socket.login(token)
    }
    

    async createMessage(content: string, channelID: string) {
        const data = {
            "content": content,
            "tts": false
        }
    
        const headers = {'Content-Type' : 'application/json', 'Authorization' : `Bot ${this.token}`}
    
        const response = await fetch(`${Constants.API_BASE}/channels/${channelID}/messages`, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        })

        return response
    }

    async createEmbed(description: string, channelID: string, title: string) {
        const data = {
            "tts": false,
            "embed": {
                "title": title,
                "description": description
            }
        }
    
        const headers = {'Content-Type' : 'application/json', 'Authorization' : `Bot ${this.token}`}
    
        const response = await fetch(`${Constants.API_BASE}/channels/${channelID}/messages`, {
            method: "POST",
            headers,
            body: JSON.stringify(data)
        })
    
        return response
    }

    async createBan(guildID: string, userID: string) {
        const headers = {'Content-Type' : 'application/json', 'Authorization' : `Bot ${this.token}`}

        const response = await fetch(`${Constants.API_BASE}/guilds/${guildID}/bans/${userID}`, {
            method: 'PUT',
            headers
        })
    }


}
