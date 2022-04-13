import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDrawing } from 'src/app/interfaces/drawing';
import { IResponse } from 'src/app/interfaces/response';
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

    deleteDrawing$(drawingId: string) {
        return this.httpClient.delete<IResponse>(`${environment.getAllDrawingsUrl}/${drawingId}`);
    }

    createDrawing$(drawingData: { title: string, description: string, imageUrl: string, author: string }) {
        return this.httpClient.post<IResponse>(environment.createDrawingUrl, drawingData);
    }

    edit$(drawingId: string, drawingData: { title: string, description: string, imageUrl: string }) {
        return this.httpClient.post<IResponse>(`${environment.getAllDrawingsUrl}/${drawingId}/edit`, drawingData);
    }

}
