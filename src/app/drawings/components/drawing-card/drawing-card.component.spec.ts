import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from '@angular/router/testing';
import { of } from "rxjs";
import { UserService } from "src/app/auth/services/user.service";
import { DrawingsService } from "../../services/drawings.service";
import { LikesCounterComponent } from "../likes-counter/likes-counter.component";
import { DrawingCardComponent } from "./drawing-card.component";

describe('DrawingCard', () => {
    let component: DrawingCardComponent;
    let fixture: ComponentFixture<DrawingCardComponent>;

    const testUser = {
        _id: 'testUserId',
        firstName: 'testUserfirstName',
        lastName: 'testUserlastName',
        email: 'testUseremail',
        age: 123,
        password: '',
        posts: []
    };

    const testDrawing = {
        _id: 'testDrawingId',
        author: testUser,
        description: 'testDrawingdescription',
        imageUrl: 'testDrawingimageUrl',
        title: 'testDrawingtitle',
        userLikesImage: false,
        votes: []
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DrawingCardComponent, LikesCounterComponent],
            imports: [ RouterTestingModule ],
            providers: [
                {
                    provide: UserService,
                    useValue: {
                        currentUser: {}
                    }
                },
                {
                    provide: DrawingsService,
                    useValue: {
                        like$: (drawingId: string) => of({ success: true })
                    }
                }
            ]
        });

        fixture = TestBed.createComponent(DrawingCardComponent);
        component = fixture.componentInstance;
    });

    it('should display title', () => {
        component.drawing = testDrawing;
        fixture.detectChanges();

        const title = fixture.debugElement.query(By.css('strong.strongText'));
        expect(title).toBeTruthy();
        expect(title.nativeElement.textContent.trim()).toEqual(testDrawing.title);
    });

    it('should have correct details link', () => {
        component.drawing = testDrawing;
        fixture.detectChanges();

        const link = fixture.debugElement.query(By.css('div.drawingCard>a'));
        expect(link).toBeTruthy();
        expect(link.nativeElement.getAttribute('ng-reflect-router-link')).toEqual(`/drawing,${testDrawing._id}`);
    });
});
