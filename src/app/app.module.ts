import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SliderHeaderComponent } from './components/slider-header/slider-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserService } from './services/user.service';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SliderHeaderComponent,
    FooterComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
      StorageService,
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
