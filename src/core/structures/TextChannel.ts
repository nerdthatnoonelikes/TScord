import { Channel } from "./Channel";

import { Client } from "../client/Client";

export class TextChannel extends Channel {

    public client: Client;

    public constructor(client: Client) {
        super();
        this.type = "text"
        this.client = client;
    }

    public async send(content: string) {

        const data = {
            "content": content,
            "tts": false
        };

        return await this.client.handler.fetch({
            endpoint: `channels/${this.id}/messages`,
            method: "POST",
            body: JSON.stringify(data)
        });
    }
}
