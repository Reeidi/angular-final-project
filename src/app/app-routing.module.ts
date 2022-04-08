import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './core/components/user-login/user-login.component';
import { UserRegisterComponent } from './core/components/user-register/user-register.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'schedule', component: SchedulePageComponent },
    { path: 'login', component: UserLoginComponent },
    { path: 'register', component: UserRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
