export abstract class TokenService{

    abstract isAuthenticated(): boolean;
    abstract setAuthenticated(value: boolean): void;
    abstract setAccessToken(value: string): void;
    abstract getAccessToken(): string;
}