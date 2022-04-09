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

    constructor(private userService: UserService, private router: Router) { }

    async submitHandler() {
        let data = this.form.value;
        let result = await this.userService.register(data);
        // if (result.success) {
        //     this.router.navigate(['/']);
        // } else {
        //     console.log(result);
        //     setError(result.error);
        // }
    }
}
