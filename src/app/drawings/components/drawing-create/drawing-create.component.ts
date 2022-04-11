import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/auth/services/user.service';
import { IUser } from 'src/app/interfaces/user';

@Component({
    selector: 'app-drawing-create',
    templateUrl: './drawing-create.component.html',
    styleUrls: ['./drawing-create.component.css']
})
export class DrawingCreateComponent {

    @ViewChild('f') form!: NgForm;

    drawingUrlStr: string = '';

    get currentUser(): IUser {
        return this.userService.currentUser?.user;
    }

    get currentUserName(): string {
        return `${this.currentUser.firstName} ${this.currentUser.lastName}`;
    }

    constructor(private userService: UserService) { }

    submitHandler() {
        console.log(this.form.value);
    }

    onUrlBlur() {
        if (!this.form.controls['drawingUrl'].valid) {
            this.drawingUrlStr = '';
            return;
        }

        this.drawingUrlStr = this.form.controls['drawingUrl'].value;
    }
}
