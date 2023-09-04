import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component';
import { WelcomeAreaComponent } from './welcome-area/welcome-area.component';
import { FormPageComponent } from './form-page/form-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarTopComponent,
    WelcomeAreaComponent,
    FormPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
