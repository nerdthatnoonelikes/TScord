import {token} from "../../token.json"
import Client from "../core/client/Client"

const client = new Client()
client.login(token)

client.on("ready", () => {
    console.log("logged in")
})

client.on("message", async (message: any) => {
    if (message.content === "!hello") {
        client.createMessage("hello", message.channel_id, token)
    }

    if (message.content === "!embed") {
        client.createEmbed("description", message.channel_id, token, "title")
    }
})

