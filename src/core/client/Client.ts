import WebSocketManager from "../ws/WebSocketManager"
import {EventEmitter} from "events";
import fetch from "node-fetch";
import {
    Constants
} from "../../constants/Constants"

export default class Client extends EventEmitter {
    // @ts-ignore
    private socket: WebSocketManager = new WebSocketManager(this)


    async login(token: string) {
        if (!token) throw new Error("please provide a token")
        this.socket.login(token)
    }
    

    async createMessage(content: string, channelID: string, token: string) {
        const data = {
            "content": content,
            "tts": false
        }
    
        const headers = {'Content-Type' : 'application/json', 'Authorization' : `Bot ${token}`}
    
        const response = await fetch(`${Constants.API_BASE}/channels/${channelID}/messages`, {
            method: "POST",
            headers,
            body: JSON.stringify(data)
        })

        return response
    }

    async createEmbed(description: string, channelID: string, token: string, title: string) {
        const data = {
            "tts": false,
            "embed": {
                "title": title,
                "description": description
            }
        }
    
        const headers = {'Content-Type' : 'application/json', 'Authorization' : `Bot ${token}`}
    
        const response = await fetch(`${Constants.API_BASE}/channels/${channelID}/messages`, {
            method: "POST",
            headers,
            body: JSON.stringify(data)
        })
    
        return response
    }

}