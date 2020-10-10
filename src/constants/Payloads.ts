
export const Heartbeat = {
    op: 1,
    d: null
};

export const Identify = {
    op: 2,
    d: {
        token: '',
        properties: {
            $os: 'linux',
            $browser: 'nerdcord', 
            $device: 'nerdcord'
        }
    }
};

export interface Payload {
    op: number;
    t: string;
    s: number;
    d: any;
}