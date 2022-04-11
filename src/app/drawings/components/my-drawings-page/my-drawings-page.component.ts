import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/auth/services/user.service';
import { IDrawing } from 'src/app/interfaces/drawing';
import { IUser } from 'src/app/interfaces/user';
import { DrawingsService } from '../../services/drawings.service';

@Component({
    selector: 'app-my-drawings-page',
    templateUrl: './my-drawings-page.component.html',
    styleUrls: ['./my-drawings-page.component.css']
})
export class MyDrawingsPageComponent implements OnInit {

    get currentUser(): IUser {
        return this.userService.currentUser?.user;
    }

    drawings$!: Observable<IDrawing[]>;

    constructor(private userService: UserService, private drawingsService: DrawingsService) { }

    ngOnInit(): void {
        this.drawings$ = this.drawingsService.getAll$();
    }

}
