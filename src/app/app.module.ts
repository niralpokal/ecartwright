import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home.component';
import { NavBarComponent } from './containers/nav-bar.component';
import { HomeAboutMeComponent } from './components/home/home-about-me.component';
import { HomePortfolioComponent } from './components/home/home-portfolio.component';
import { HomeContactComponent } from './components/home/home-contact.component';
import { HomeInstagramComponent } from './components/home/home-instagram.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    HomeAboutMeComponent,
    HomePortfolioComponent,
    HomeContactComponent,
    HomeInstagramComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
