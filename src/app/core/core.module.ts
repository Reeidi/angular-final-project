import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SliderHeaderComponent } from './components/slider-header/slider-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      NavigationBarComponent,
      SliderHeaderComponent,
      FooterComponent,
      UserLoginComponent,
      UserRegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
      NavigationBarComponent,
      SliderHeaderComponent,
      FooterComponent,
      UserLoginComponent,
      UserRegisterComponent
  ]
})
export class CoreModule { }
