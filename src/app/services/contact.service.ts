import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IResponse } from '../interfaces/response';

@Injectable()
export class ContactService {

    constructor(private httpClient: HttpClient) { }

    send$(data: Object) {
        return this.httpClient.post<IResponse>(environment.contactUrl, data);
    }
}
