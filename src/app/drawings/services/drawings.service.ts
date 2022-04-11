import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDrawing } from 'src/app/interfaces/drawing';
import { environment } from 'src/environments/environment';

@Injectable()
export class DrawingsService {

    constructor(private httpClient: HttpClient) { }

    getAll$() {
        return this.httpClient.get<IDrawing[]>(environment.getAllDrawingsUrl);
    }

    get$(drawingId: string) {
        return this.httpClient.get<IDrawing>(`${environment.getAllDrawingsUrl}/${drawingId}`)
    }

    like$(drawingId: string) {
        return this.httpClient.get<any>(`${environment.getAllDrawingsUrl}/${drawingId}/vote`);
    }
}
