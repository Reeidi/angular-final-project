import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SliderHeaderComponent } from './components/slider-header/slider-header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
      NavigationBarComponent,
      SliderHeaderComponent,
      FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      NavigationBarComponent,
      SliderHeaderComponent,
      FooterComponent
  ]
})
export class CoreModule { }
