import {token} from '../../token.json';
import { client } from '../index';
const Client = new client(token);

Client.on("ready", async () => {
  console.log("Ready")
})

Client.on("message", async (message) => {
    if (message.content === "!hello") {
        Client.rest.sendMessage("725747787555274854", "Hello World");
    }
})

Client.login()