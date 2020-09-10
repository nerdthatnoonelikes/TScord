import {token} from "../../token.json"
import Client from "../core/client/Client"

/*import WebSocketManager from "../core/ws/WebSocketManager"
const socket = new WebSocketManager()

socket.login(token)*/

const client = new Client()
client.login(token)