import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../../services/storage.service';
import { environment } from 'src/environments/environment';
import { ILoggedUser } from '../../interfaces/loggedUser';
import { map, Observable, tap } from 'rxjs';
import { IResponse } from 'src/app/interfaces/response';

@Injectable()
export class UserService {

    get currentUser(): ILoggedUser {
        return this.storage.getItem('user');
    }

    constructor(private storage: StorageService, private httpClient: HttpClient) { }

    login$(userData: { email: string, password: string }) {
        return this.httpClient
            .post<ILoggedUser>(environment.loginUserUrl, userData, { observe: 'response' })
            .pipe(
                map(response => response.body),
                tap(body => {
                    if (body && body.hasOwnProperty('user') && body.hasOwnProperty('token')) {
                        this.storage.setItem('user', body as ILoggedUser);
                    }
                })
            );
    }

    logout() {
        this.storage.setItem('user', null);
    }

    register$(userData: { firstName: string, LastName: string, email: string, age: Number, password: string, repeatPassword: string }) {
        return this.httpClient.post<IResponse>(environment.registerUserUrl, userData);
    }
}
