import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/auth/services/user.service';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

    get currentUser(): IUser {
        return this.userService.currentUser?.user;
    }

    constructor(private userService: UserService, private router: Router) { }

    logoutClick() {
        this.userService.logout();
        this.router.navigate(['/']);
    }
}
