import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-card',
    templateUrl: './event-card.component.html',
    styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

    @Input() date: string = '';
    @Input() text: string = '';

    constructor() { }

    ngOnInit(): void {
    }

}
