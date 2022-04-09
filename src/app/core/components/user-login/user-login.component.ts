import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

    @ViewChild('f') form!: NgForm;

    constructor(private userService: UserService, private router: Router) { }

    submitHandler() {
        let data = this.form.value;
        this.userService.login(data);
        this.router.navigate(['/']);
    }
}
