import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawingCreateComponent } from './components/drawing-create/drawing-create.component';
import { FormsModule } from '@angular/forms';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { DrawingCardComponent } from './components/drawing-card/drawing-card.component';
import { LikesCounterComponent } from './components/likes-counter/likes-counter.component';
import { DrawingsService } from './services/drawings.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DrawingCreateComponent,
    GalleryPageComponent,
    DrawingCardComponent,
    LikesCounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
      DrawingsService
  ]
})
export class DrawingsModule { }
