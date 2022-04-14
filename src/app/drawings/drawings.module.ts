import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawingCreateComponent } from './components/drawing-create/drawing-create.component';
import { FormsModule } from '@angular/forms';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { DrawingCardComponent } from './components/drawing-card/drawing-card.component';
import { LikesCounterComponent } from './components/likes-counter/likes-counter.component';
import { DrawingsService } from './services/drawings.service';
import { RouterModule, Routes } from '@angular/router';
import { DrawingDetailsComponent } from './components/drawing-details/drawing-details.component';
import { DrawingEditComponent } from './components/drawing-edit/drawing-edit.component';
import { MyDrawingsPageComponent } from './components/my-drawings-page/my-drawings-page.component';
import { MinePipe } from './mine.pipe';
import { UrlValidationDirective } from './url-validation.directive';
import { AuthGuard } from '../auth/auth.guard';
import { NoPageComponent } from '../pages/no-page/no-page.component';
import { AuthorGuard } from './author.guard';

const drawingRoutes: Routes = [
    { path: 'create', component: DrawingCreateComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'all', component: GalleryPageComponent, pathMatch: 'full' },
    { path: 'mine', component: MyDrawingsPageComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: ':id', component: DrawingDetailsComponent, pathMatch: 'full' },
    { path: ':id/edit', component: DrawingEditComponent, pathMatch: 'full', canActivate: [AuthGuard, AuthorGuard] },
    { path: '**', component: NoPageComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    DrawingCreateComponent,
    GalleryPageComponent,
    DrawingCardComponent,
    LikesCounterComponent,
    DrawingDetailsComponent,
    DrawingEditComponent,
    MyDrawingsPageComponent,
    MinePipe,
    UrlValidationDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(drawingRoutes),
    FormsModule,
    RouterModule
  ],
  providers: [
      DrawingsService,
      AuthorGuard
  ]
})
export class DrawingsModule { }
