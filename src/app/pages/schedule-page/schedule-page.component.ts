import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/interfaces/event';
import { EventService } from 'src/app/services/event.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-schedule-page',
    templateUrl: './schedule-page.component.html',
    styleUrls: ['./schedule-page.component.css']
})
export class SchedulePageComponent implements OnInit {

    events: IEvent[] = [];

    constructor(private eventService: EventService) {
        this.eventService.getEvents$().subscribe(result => { this.events = result.result; console.log(this.events);
        });
    }

    ngOnInit(): void {
    }

}
