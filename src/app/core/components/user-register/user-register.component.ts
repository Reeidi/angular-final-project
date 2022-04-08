import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitHandler() {
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
