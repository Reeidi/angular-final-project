import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

    get isLogged() {
        return this.userService.isLogged;
    }

    constructor(private userService: UserService) { }

    loginHandler() {
        this.userService.login();
    }

    logoutHandler() {
        this.userService.logout();
    }
}
