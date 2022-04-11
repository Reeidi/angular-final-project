import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/auth/services/user.service';
import { IDrawing } from 'src/app/interfaces/drawing';
import { IUser } from 'src/app/interfaces/user';
import { DrawingsService } from '../../services/drawings.service';

@Component({
    selector: 'app-drawing-details',
    templateUrl: './drawing-details.component.html',
    styleUrls: ['./drawing-details.component.css']
})
export class DrawingDetailsComponent implements OnInit {

    id: string = this.route.snapshot.paramMap.get('id')!;
    drawing!: IDrawing;

    get author(): IUser {
        return this.drawing?.author;
    }

    get isAuthor(): boolean {
        return this.author._id === this.userService.currentUser.user._id;
    }

    constructor(private userService: UserService, private drawingService: DrawingsService, private route: ActivatedRoute) {
        this.drawingService.get$(this.id).subscribe(drawing => this.drawing = drawing);
    }

    ngOnInit(): void {
    }

    editClick() {
        // () => navigate(`/drawing/${params.drawingId}/edit`)}
    }

    deleteClick() {

    }

}
