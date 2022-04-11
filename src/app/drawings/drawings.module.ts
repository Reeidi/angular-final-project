import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawingCreateComponent } from './components/drawing-create/drawing-create.component';
import { FormsModule } from '@angular/forms';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { DrawingCardComponent } from './components/drawing-card/drawing-card.component';
import { LikesCounterComponent } from './components/likes-counter/likes-counter.component';
import { DrawingsService } from './services/drawings.service';
import { RouterModule } from '@angular/router';
import { DrawingDetailsComponent } from './components/drawing-details/drawing-details.component';
import { DrawingEditComponent } from './components/drawing-edit/drawing-edit.component';
import { MyDrawingsPageComponent } from './components/my-drawings-page/my-drawings-page.component';
import { MinePipe } from './mine.pipe';



@NgModule({
  declarations: [
    DrawingCreateComponent,
    GalleryPageComponent,
    DrawingCardComponent,
    LikesCounterComponent,
    DrawingDetailsComponent,
    DrawingEditComponent,
    MyDrawingsPageComponent,
    MinePipe
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
