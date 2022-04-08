import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-schedule-item',
    templateUrl: './schedule-item.component.html',
    styleUrls: ['./schedule-item.component.css']
})
export class ScheduleItemComponent implements OnInit {

    @Input() time: string = '';
    @Input() courseName: string = '';
    @Input() teacher: string = '';

    constructor() { }

    ngOnInit(): void {
    }

}
