import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home.component';
import { NavBarComponent } from './containers/nav-bar.component';
import { HomeAboutMeComponent } from './components/home/home-about-me.component';
import { HomePortfolioComponent } from './components/home/home-portfolio.component';
import { HomeInstagramComponent } from './components/home/home-instagram.component';
import { ImageService } from './services/image.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    HomeAboutMeComponent,
    HomePortfolioComponent,
    HomeInstagramComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
