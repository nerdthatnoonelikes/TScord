export interface UserInterface {
    id: string,
    username: string,
    discriminator: string,
    avatar: string | null,
    bot?: boolean,
    system?: boolean,
    mfa_enabled?: boolean,
    locale?: string,
    verified?: boolean,
    email?: string,
    flags?: number,
    premium_type?: number,
    public_flags?: number
}