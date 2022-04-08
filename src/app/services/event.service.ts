import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEvent } from '../interfaces/event';

@Injectable()
export class EventService {

    constructor(private httpClient: HttpClient) { }

    getEvents$(): Observable<{ success: boolean, result: IEvent[] }> {
        return this.httpClient.get<{ success: boolean, result: IEvent[] }>(environment.eventsUrl);
    }
}
