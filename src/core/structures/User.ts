import { UserInterface } from "../interfaces/User";

export class User {
    public id!: string;
    public username!: string;
    public discriminator!: string;
    public avatar?: string;
    public bot!: boolean;
    public system!: boolean;
    public twoFactor!: boolean;
    public lang?: string;
    public verified!: boolean;
    public email?: string;
    public flags?: number;
    public premiumType!: string;
    public publicFlags?: number;
    public data: UserInterface;

    public constructor(data: UserInterface) {
        this._handle();
    }

    private _handle() {
        if (!this.data)

        if (this.data.id) this.id = this.data.id;
        this.username = this.data.username;
        this.discriminator = this.data.discriminator;
    }
}