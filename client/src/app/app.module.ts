import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterModule } from './core/footer/footer.module';
import { HomeModule } from './views/home/home.module';
import { IconsModule } from './icons/icons.module';
import { NavigationModule } from './core/navigation/navigation.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    FontAwesomeModule,
    NavigationModule,
    FooterModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
