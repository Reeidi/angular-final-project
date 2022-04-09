import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './core/services/user.service';
import { StorageService } from './services/storage.service';
import { CoreModule } from './core/core.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';
import { ScheduleModule } from './schedule/schedule.module';
import { EventService } from './services/event.service';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { FormsModule } from '@angular/forms';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    SchedulePageComponent,
    ContactsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ScheduleModule,
    FormsModule
  ],
  providers: [
      StorageService,
      UserService,
      EventService,
      ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
