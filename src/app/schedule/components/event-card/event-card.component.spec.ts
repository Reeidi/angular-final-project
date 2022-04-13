import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { EventCardComponent } from "./event-card.component";

describe('EventCard', () => {
    let component: EventCardComponent;
    let fixture: ComponentFixture<EventCardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [EventCardComponent]
        });

        fixture = TestBed.createComponent(EventCardComponent);
        component = fixture.componentInstance;
    });

    it('Should display date', () => {
        component.date = '13.04.2022';
        fixture.detectChanges();

        const eventCard = fixture.debugElement.query(By.css('p>strong'));
        expect(eventCard).toBeTruthy();
        expect(eventCard.nativeElement.textContent).toEqual('13.04.2022');
    });

    it('Should display text', () => {
        component.text = 'Lorem ipsum bla bla';
        fixture.detectChanges();

        const eventCard = fixture.debugElement.query(By.css('p:nth-of-type(2)'));
        expect(eventCard).toBeTruthy();
        expect(eventCard.nativeElement.textContent.trim()).toEqual('Lorem ipsum bla bla  More...');
    });
});
