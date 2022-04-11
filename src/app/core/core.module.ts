import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SliderHeaderComponent } from './components/slider-header/slider-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { ErrorHandlerInterceptor } from './error-handler.interceptor';
import { AuthModule } from '../auth/auth.module';

@NgModule({
    declarations: [
        NavigationBarComponent,
        SliderHeaderComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        AuthModule
    ],
    exports: [
        NavigationBarComponent,
        SliderHeaderComponent,
        FooterComponent,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true
        }
    ]
})
export class CoreModule { }
