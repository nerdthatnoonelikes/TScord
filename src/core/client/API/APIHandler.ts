import fetch, { Headers } from "node-fetch";
import { Client } from "../Client";
import { APIOptions } from "../../../constants/APIOptions";
import { Constants } from "../../../constants/Constants";

export class APIHandler {
    constructor(public client: Client) {}

    public async fetch(options: APIOptions) {
        try {
                const fetched = await fetch(`${Constants.API_BASE}/${options.endpoint}`, {
                    method: options.method,
                    headers: {
                        "Content-Type" : "application/json",
                        Authorization: `Bot ${this.client.token}`
                    }
                })
            if (fetched.status === 429) {
                const json = await fetched.json();
                throw new Error(`You have been ratelimited, Reason: ${json.body}, Request will be retried after ${json.retry_after}`)
            }
        } catch (e) {
            throw new Error(e);
        }
    }
}