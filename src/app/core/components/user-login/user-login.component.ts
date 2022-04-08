import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

    error = false;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
    }

    TEMPORARYCLICKHANDLER(e: Event): void {
        e.preventDefault();
        this.userService.login('reeidi@abv.bg', '1234');
    }

    submitHandler() {
    }

    emailOnBlur(eventInfo: Event) {
        console.log('email on blur', eventInfo);
    }

    passwordOnBlur(eventInfo: Event) {
        console.log('password on blur', eventInfo);
    }
}
