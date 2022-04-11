import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './auth/components/user-login/user-login.component';
import { UserRegisterComponent } from './auth/components/user-register/user-register.component';
import { DrawingCreateComponent } from './drawings/components/drawing-create/drawing-create.component';
import { DrawingDetailsComponent } from './drawings/components/drawing-details/drawing-details.component';
import { DrawingEditComponent } from './drawings/components/drawing-edit/drawing-edit.component';
import { GalleryPageComponent } from './drawings/components/gallery-page/gallery-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'schedule', component: SchedulePageComponent },
    { path: 'login', component: UserLoginComponent },
    { path: 'register', component: UserRegisterComponent },
    { path: 'contacts', component: ContactsPageComponent },
    { path: 'drawing/create', component: DrawingCreateComponent },
    { path: 'drawing/all', component: GalleryPageComponent },
    { path: 'drawing/:id', component: DrawingDetailsComponent },
    { path: 'drawing/:id/edit', component: DrawingEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
