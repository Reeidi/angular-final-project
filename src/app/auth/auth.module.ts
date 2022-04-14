import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [
      UserLoginComponent,
      UserRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
      UserLoginComponent,
      UserRegisterComponent
  ],
  providers: [
      UserService,
      AuthGuard,
  ],
})
export class AuthModule { }
