import { Component, OnInit } from '@angular/core';
import { ILoggedUser } from 'src/app/interfaces/loggedUser';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

    get currentUser(): ILoggedUser {
        return this.userService.currentUser;
    }

    constructor(private userService: UserService) { }

    loginHandler() {
        this.userService.login("reeidi@abv.bg", '1234');
    }

    logoutHandler() {
        this.userService.logout();
    }
}
