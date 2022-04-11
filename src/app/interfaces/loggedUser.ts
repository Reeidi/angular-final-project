import { IResponse } from "./response";
import { IUser } from "./user";

export interface ILoggedUser extends IResponse {
    token: string;
    user: IUser;
}
