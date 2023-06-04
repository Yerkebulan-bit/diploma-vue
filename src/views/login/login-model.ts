export class LoginModel {
    username: string;
    password: string;

    constructor(object?: any) {
        this.username = object && object.username || '';
        this.password = object && object.password || '';
    }
}