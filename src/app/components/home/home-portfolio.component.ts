import { Component } from '@angular/core';

@Component({
    selector:'home-portfolio',
    styleUrls: ['home-portfolio.component.scss'],
    template: `
    <div class="parallex container overlay">
       <div class="center white-space">
            <span class="white-text padding large-center-text">Portfolio</span>
        </div>
    </div>
    <div class="flex-container">
        <div class="flex-item" *ngFor="let image of images">
            <img class="img" src="../../../assets/profile.jpg">
        </div>
    </div>
    `
})
export class HomePortfolioComponent {
    images = Array(8).fill('');
}
