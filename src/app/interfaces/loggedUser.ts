import { IUser } from "./user";

export interface ILoggedUser {
    token: string;
    user: IUser;
}
