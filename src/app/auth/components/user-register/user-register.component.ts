import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

    @ViewChild('f') form!: NgForm;

    error: string | undefined;

    constructor(private userService: UserService, private router: Router) { }

    submitHandler() {
        let data = this.form.value;
        this.userService.register$(data).subscribe({
            next: (response) => {
                if (response?.success) {
                    this.router.navigate(['/login']);
                } else {
                    this.error = response?.error;
                }
            },
            error: (err) => {
                console.log(err);
                this.router.navigate(['/register']);
            }
        });
    }
}
