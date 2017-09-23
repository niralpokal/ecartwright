import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { AboutMeComponent } from './components/about-me.component';
import { HomePortfolioComponent } from './components/home-portfolio.component';
import { HomeContactComponent } from './components/home-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    HomePortfolioComponent,
    HomeContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
