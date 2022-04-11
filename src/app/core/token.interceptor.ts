import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../auth/services/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        let currentUser = this.userService.currentUser;
        if (currentUser?.token) {
            request = request.clone({
                setHeaders: {
                    'X-Authorization': currentUser.token,
                    'Content-Type': 'application/json'
                }
            });
        }

        return next.handle(request);
    }
}
