import { IUser } from "./user";

export interface IDrawing {
    _id: string;
    author: IUser;
    description: string;
    imageUrl: string;
    title: string;
    userLikesImage: boolean;
    votes: any[];
}
