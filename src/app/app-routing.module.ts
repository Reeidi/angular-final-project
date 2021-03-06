import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './auth/components/user-login/user-login.component';
import { UserRegisterComponent } from './auth/components/user-register/user-register.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NoPageComponent } from './pages/no-page/no-page.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'schedule', component: SchedulePageComponent },
    { path: 'login', component: UserLoginComponent },
    { path: 'register', component: UserRegisterComponent },
    { path: 'contacts', component: ContactsPageComponent },
    {
        path: 'drawing',
        loadChildren: () => import('./drawings/drawings.module').then(m => m.DrawingsModule) // Load lazy
    },
    { path: '**', component: NoPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
