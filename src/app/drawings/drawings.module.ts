import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawingCreateComponent } from './components/drawing-create/drawing-create.component';
import { FormsModule } from '@angular/forms';
import { UrlValidationDirective } from './url-validation.directive';



@NgModule({
  declarations: [
    DrawingCreateComponent,
    UrlValidationDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
      DrawingCreateComponent
  ]
})
export class DrawingsModule { }
