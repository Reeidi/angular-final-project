import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../../services/storage.service';
import { environment } from 'src/environments/environment';
import { ILoggedUser } from '../../interfaces/loggedUser';

@Injectable()
export class UserService {

    get currentUser(): ILoggedUser {
        return this.storage.getItem('user');
    }

    constructor(private storage: StorageService, private httpClient: HttpClient) { }

    login(userData: { email: string, password: string }) {

        // TODO:
        userData = { email: 'reeidi@abv.bg', password: '1234' };

        let obs = this.httpClient.post<ILoggedUser>(environment.loginUserUrl, userData);
        obs.subscribe(result => {
            if (result.hasOwnProperty('user') && result.hasOwnProperty('token')) {
                this.storage.setItem('user', result as ILoggedUser);
            }
        });
    }

    logout() {
        this.storage.setItem('user', null);
    }

    async register(userData: { firstName: string, LastName: string, email: string, age: Number, password: string, repeatPassword: string }) {
        // TODO:
        console.log(`Trying to register user!!`, userData);
    }
}
