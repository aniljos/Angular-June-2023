import { TokenService } from "./token-service";

export class TokenServiceImpl extends TokenService{

    private isAuth: boolean = false;
    private accessToken: string = "";

    override isAuthenticated(): boolean {
        return this.isAuth;
    }
    override setAuthenticated(value: boolean): void {
        this.isAuth = value;
    }
    override setAccessToken(value: string): void {
        this.accessToken = value;
    }
    override getAccessToken(): string {
        return this.accessToken;
    }

}