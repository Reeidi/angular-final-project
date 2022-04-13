import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { UserService } from "src/app/auth/services/user.service";
import { DrawingsService } from "../../services/drawings.service";
import { LikesCounterComponent } from "./likes-counter.component";

describe('LikesCounter', () => {
    let component: LikesCounterComponent;
    let fixture: ComponentFixture<LikesCounterComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LikesCounterComponent],
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

        fixture = TestBed.createComponent(LikesCounterComponent);
        component = fixture.componentInstance;
    });

    it('should show 0 as initial state', () => {
        fixture.detectChanges();

        const likesCounter = fixture.debugElement.query(By.css('small.likes'));
        expect(likesCounter).toBeTruthy();
        expect(likesCounter.nativeElement.textContent.trim()).toEqual('0');
    });

    it('should show correct likes', () => {
        component.likes = 5;
        fixture.detectChanges();

        const likesCounter = fixture.debugElement.query(By.css('small.likes'));
        expect(likesCounter).toBeTruthy();
        expect(likesCounter.nativeElement.textContent.trim()).toEqual('5');
    });

    it('Should display user not liked', () => {
        fixture.detectChanges();

        const likesCounterIcon = fixture.debugElement.query(By.css('small.likes>img.icon'));
        expect(likesCounterIcon).toBeTruthy();
        expect(likesCounterIcon.nativeElement.src).toContain(component.heartEmptyIcon);
    });

    it('Should display user liked', () => {
        component.userLikesImage = true;
        fixture.detectChanges();

        const likesCounterIcon = fixture.debugElement.query(By.css('small.likes>img.icon'));
        expect(likesCounterIcon).toBeTruthy();
        expect(likesCounterIcon.nativeElement.src).toContain(component.heartIcon);
    });

    it('Should send a like', () => {
        const drawingService = TestBed.inject(DrawingsService);
        spyOn(drawingService, 'like$').and.callThrough();
        component.imageId = "testImageId";
        fixture.detectChanges();

        const likesCounterIcon = fixture.debugElement.query(By.css('small.likes>img.icon'));
        expect(likesCounterIcon).toBeTruthy();
        likesCounterIcon.triggerEventHandler('click', {});

        expect(drawingService.like$).toHaveBeenCalledWith(component.imageId);
    });

    it('Should handle a new like', () => {
        const drawingService = TestBed.inject(DrawingsService);
        spyOn(drawingService, 'like$').and.callThrough();
        fixture.detectChanges();

        const likesCounterIcon = fixture.debugElement.query(By.css('small.likes>img.icon'));
        expect(likesCounterIcon).toBeTruthy();
        likesCounterIcon.triggerEventHandler('click', {});

        expect(drawingService.like$).toHaveBeenCalledWith('');

        const likesCounter = fixture.debugElement.query(By.css('small.likes'));
        expect(likesCounter).toBeTruthy();
        expect(component.likes).toEqual(1);

        fixture.detectChanges();
        expect(likesCounter.nativeElement.textContent.trim()).toEqual('1');
        expect(likesCounterIcon.nativeElement.src).toContain(component.heartIcon);
    });

    it('Should ignore a repeat like', () => {
        const drawingService = TestBed.inject(DrawingsService);
        spyOn(drawingService, 'like$').and.callThrough();

        component.userLikesImage = true;
        component.likes = 1;

        fixture.detectChanges();

        const likesCounterIcon = fixture.debugElement.query(By.css('small.likes>img.icon'));
        expect(likesCounterIcon).toBeTruthy();
        likesCounterIcon.triggerEventHandler('click', {});

        expect(drawingService.like$).not.toHaveBeenCalled();

        const likesCounter = fixture.debugElement.query(By.css('small.likes'));
        expect(likesCounter).toBeTruthy();
        expect(component.likes).toEqual(1);

        fixture.detectChanges();
        expect(likesCounter.nativeElement.textContent.trim()).toEqual('1');
        expect(likesCounterIcon.nativeElement.src).toContain(component.heartIcon);
    });
});
