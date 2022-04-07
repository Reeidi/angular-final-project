import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

    get currentUser(): IUser {
        return this.userService.currentUser?.user;
    }

    constructor(private userService: UserService) { }

    loginHandler() {
        this.userService.login("reeidi@abv.bg", '1234');
    }

    logoutClick() {
        this.userService.logout();
    }
}