import { NgModule, isDevMode } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterModule } from './core/footer/footer.module';
import { HomeModule } from './views/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from './icons/icons.module';
import { LoginModule } from './views/login/login.module';
import { NavigationModule } from './core/navigation/navigation.module';
import { RegisterModule } from './views/register/register.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
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
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [validationInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
