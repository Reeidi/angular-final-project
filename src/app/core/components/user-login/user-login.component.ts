import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

    error = false;

    constructor(private userService: UserService, private router: Router) { }

    submitHandler() {
        this.userService.login('reeidi@abv.bg', '1234');
        this.router.navigate(['/']);
    }
}
