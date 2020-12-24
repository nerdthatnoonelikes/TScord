export class Channel {
    public type: "unknown" | "private" | "text" | "voice" | "news" | "category";
    public id?: string;
    public constructor() {
        this.type = "unknown";
    }
}
