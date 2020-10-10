A basic discord library made in typescript
 	

* https://discord.gg/4Ee3uy3, Support server link
* https://www.npmjs.com/package/nerdcord

`npm i nerdcord`

example ping pong bot

```js
const Discord = require("nerdcord");

const Client = new Discord.client("token");

Client.login();

Client.on("ready", () => {
    console.log("ready")
})

Client.on("message", async (message) => {
    if (message.content === "?ping") {
        Client.createMessage("pong", message.channel_id)
    }
})
