import {token} from "../../token.json"
import { client } from "../index"
const Client = new client()

Client.login(token)

Client.on("ready", () => {
    console.log("logged in")
})

Client.on("message", async (message: any) => {
    if (message.content === "!hello") {
        Client.createMessage("hello", message.channel_id, token)
    }

    if (message.content === "!embed") {
        Client.createEmbed("description", message.channel_id, token, "title")
    }
})

