nerdcord is a library in development feel free to contribute

 	

* https://discord.gg/4Ee3uy3, Support server link

`npm i nerdcord`

example ping pong bot

```js
const Discord = require("nerdcord")

const Client = new Discord.client()

Client.login("token")

Client.on("ready", () => {
    console.log("ready")
})

Client.on("message", async (message) => {
    if (message.content === "?ping") {
        Client.createMessage("pong", message.channel_id, "token")
    }
})```
