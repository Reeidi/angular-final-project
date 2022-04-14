import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DrawingsService } from './services/drawings.service';
import { UserService } from '../auth/services/user.service';

@Injectable()
export class AuthorGuard implements CanActivate {

    constructor(private userService: UserService, private drawingService: DrawingsService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        let user = this.userService.currentUser?.user;
        let drawingId = route.paramMap.get('id')!;

        return this.drawingService.get$(drawingId).pipe(
            map(resultDrawing => {
                if (user === null || user._id !== resultDrawing.author._id) {
                    this.router.navigate(['/404']);
                    return false;
                }

                return true;
            })
        );
    }

}
