import { Pipe, PipeTransform } from '@angular/core';
import { IDrawing } from '../interfaces/drawing';
import { IUser } from '../interfaces/user';

@Pipe({
    name: 'mine'
})
export class MinePipe implements PipeTransform {

    transform(drawings: IDrawing[] | null, currentUser: IUser) {
        return drawings?.filter(d => d.author._id === currentUser._id);
    }

}
