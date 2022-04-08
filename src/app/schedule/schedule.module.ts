import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleItemComponent } from './components/schedule-item/schedule-item.component';
import { EventCardComponent } from './components/event-card/event-card.component';



@NgModule({
  declarations: [
      ScheduleItemComponent,
      EventCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      ScheduleItemComponent,
      EventCardComponent
  ]
})
export class ScheduleModule { }
