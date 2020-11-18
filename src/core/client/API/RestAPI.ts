import { APIHandler } from "./APIHandler";
import { Client } from "../Client";

export class RestAPI {
    public handler: APIHandler;
    public client!: Client;

    constructor(client: Client) {
        Object.defineProperty(this, "client", {
            value: client,
            enumerable: false,
            writable: false
        })

        this.handler = new APIHandler(this.client)
    }

    public async sendMessage(channelID: string, content: any) {
        const data = {
            "content": content,
            "tts": false
        }
        return await this.handler.fetch({
            endpoint: `channels/${channelID}/messages`,
            method: "POST",
            body: JSON.stringify(data)
        })
    };
}