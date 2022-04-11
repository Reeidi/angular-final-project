import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/auth/services/user.service';
import { IDrawing } from 'src/app/interfaces/drawing';
import { IUser } from 'src/app/interfaces/user';
import { DrawingsService } from '../../services/drawings.service';

@Component({
    selector: 'app-drawing-edit',
    templateUrl: './drawing-edit.component.html',
    styleUrls: ['./drawing-edit.component.css']
})
export class DrawingEditComponent implements OnInit {

    id: string = this.route.snapshot.paramMap.get('id')!;
    drawing!: IDrawing;

    @ViewChild('f') form!: NgForm;

    get currentUser(): IUser {
        return this.userService.currentUser?.user;
    }

    get currentUserName(): string {
        return `${this.currentUser.firstName} ${this.currentUser.lastName}`;
    }

    constructor(private userService: UserService, private drawingService: DrawingsService, private route: ActivatedRoute) {
        this.drawingService.get$(this.id).subscribe(drawing => this.drawing = drawing);
    }

    ngOnInit(): void {
    }

    submitHandler() {
        console.log(this.form.value);
    }

    onUrlBlur() {
        if (!this.form.controls['drawingUrl'].valid) {
            this.drawing.imageUrl = '';
            return;
        }

        this.drawing.imageUrl = this.form.controls['drawingUrl'].value;
    }
}
