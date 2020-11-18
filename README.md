## A basic discord library made in typescript
 	

* https://discord.gg/4Ee3uy3, Support server link
* https://www.npmjs.com/package/nerdcord

`npm i nerdcord`

# If you want to get the latest version of nerdcord
1. Clone this repository
2. Install dependencies
3. Import the src/index.ts file
4. Make your bot

# TODO
1. Documentation
2. More Endpoints
3. Add More Handlers

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
