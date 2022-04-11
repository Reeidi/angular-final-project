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

    error: string | undefined;

    constructor(private userService: UserService, private router: Router) { }

    submitHandler() {
        let data = this.form.value;
        this.userService.login$(data).subscribe({
            next: (response) => {
                console.log(response);
                if (response?.success || response?.token) {
                    this.router.navigate(['/']);
                } else {
                    this.error = response?.error;
                }
            },
            error: (err) => {
                console.log(err);
                this.router.navigate(['/login']);
            }
        });
    }
}
