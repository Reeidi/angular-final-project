import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/services/user.service';
import { DrawingsService } from '../../services/drawings.service';

@Component({
    selector: 'app-likes-counter',
    templateUrl: './likes-counter.component.html',
    styleUrls: ['./likes-counter.component.css']
})
export class LikesCounterComponent implements OnInit {

    heartIcon: string = 'assets/images/heart-icon.png';
    heartEmptyIcon: string = 'assets/images/heart-empty-icon.png';

    get activeIcon(): string {
        return this.userLikesImage ? this.heartIcon : this.heartEmptyIcon;
    }

    @Input() likes: number = 0;
    @Input() userLikesImage: boolean = false;
    @Input() imageId: string = '';

    constructor(private userService: UserService, private drawingService: DrawingsService) { }

    ngOnInit(): void {
    }

    clickHandler() {
        if (this.userService.currentUser && !this.userLikesImage) {
            this.drawingService.like$(this.imageId).subscribe(x => {
                if (x.hasOwnProperty('success') && x.success) {
                    this.userLikesImage = true;
                    this.likes = x.likesCount || this.likes + 1;
                }
            });
        }
    }
}
