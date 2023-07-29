import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterModule } from './core/footer/footer.module';
import { HomeModule } from './views/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from './icons/icons.module';
import { LoginModule } from './views/login/login.module';
import { NavigationModule } from './core/navigation/navigation.module';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { RegisterModule } from './views/register/register.module';
import { validationInterceptorProvider } from './shared/interceptors/validation.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    FontAwesomeModule,
    NavigationModule,
    FooterModule,
    LoginModule,
    RegisterModule,
    HomeModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [validationInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
