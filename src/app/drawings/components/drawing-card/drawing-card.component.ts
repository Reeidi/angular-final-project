import { Component, Input, OnInit } from '@angular/core';
import { IDrawing } from 'src/app/interfaces/drawing';

@Component({
    selector: 'app-drawing-card',
    templateUrl: './drawing-card.component.html',
    styleUrls: ['./drawing-card.component.css']
})
export class DrawingCardComponent implements OnInit {

    @Input() drawing!: IDrawing;

    constructor() { }

    ngOnInit(): void {
    }

}
