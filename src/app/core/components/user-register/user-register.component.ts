import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit, AfterViewInit {

    @ViewChild('f') form!: NgForm;

    constructor(private userService: UserService) { }

    ngAfterViewInit(): void {
        console.dir(this.form);
    }

    ngOnInit(): void {
    }

    async submitHandler() {
        let data = this.form.value;
        let result = await this.userService.register(data);
        // if (result.success) {
        //     navigate('/');
        // } else {
        //     console.log(result);
        //     setError(result.error);
        // }
    }

    firstNameOnBlur(eventInfo: Event) {
        console.log('firstName on blur', eventInfo);
    }

    lastNameOnBlur(eventInfo: Event) {
        console.log('lastName on blur', eventInfo);
    }

    emailOnBlur(eventInfo: Event) {
        console.log('email on blur', eventInfo);
    }

    ageOnBlur(eventInfo: Event) {
        console.log('age on blur', eventInfo);
    }

    passwordOnBlur(eventInfo: Event) {
        console.log('password on blur', eventInfo);
    }

    repeatPasswordOnBlur(eventInfo: Event) {
        console.log('repeatPassword on blur', eventInfo);
    }
}
