import {token} from '../../token.json';
import { client } from '../index';
const Client = new client(token);

Client.on("ready", async () => {
  console.log("Ready")
})

Client.on("message", async (message) => {
    // TODO
})

Client.login()
