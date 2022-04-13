import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/services/user.service';
import { IUser } from 'src/app/interfaces/user';
import { DrawingsService } from '../../services/drawings.service';

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

    constructor(private userService: UserService, private drawingsService: DrawingsService, private router: Router) { }

    submitHandler() {
        let formData = this.form.value;
        let data = {
            title: formData.title,
            description: formData.description,
            imageUrl: formData.drawingUrl,
            author: this.currentUser._id
        };
        this.drawingsService.createDrawing$(data).subscribe({
            next: (response) => {
                if (response?.success) {
                    this.router.navigate(['/drawing/mine']);
                }
            },
            error: (err) => {
                console.log(err);
            }
        });
    }

    onUrlBlur() {
        if (!this.form.controls['drawingUrl'].valid) {
            this.drawingUrlStr = '';
            return;
        }

        this.drawingUrlStr = this.form.controls['drawingUrl'].value;
    }
}
