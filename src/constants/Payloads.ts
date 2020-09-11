
export const Heartbeat = {
    op: 1,
    d: null
}

export const Identify = {
    op: 2,
    d: {
        token: '',
        properties: {
            $os: "linux",
            $browser: 'tscord', 
            $device: 'tscord'
        }
    }
}

export interface Payload {
    op: number;
    t: string;
    s: number;
    d: any;
}