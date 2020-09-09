import WebSocket from "ws";

export const login = async (token: string) => {
    const p = {op:1, d: null}
    const properties = { $os: 'linux', $browser: 'tscord', $device: 'tscord'}
    const identify = {
      op: 2,
      d: { token, properties }
    };

    const GATEWAY = "wss://gateway.discord.gg/?v=6&encoding=json";

    const socket = await new WebSocket(GATEWAY);

    socket.on("open", () => {
        console.log("connected")
    })
    
    socket.onopen = e => {
        setInterval(() => {
            socket.send(JSON.stringify(identify))
        }, 41250)
    }

    socket.on("message", message => {
        console.log(JSON.parse(message.toString()))
    })
}