import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector:'home-portfolio',
    styleUrls: ['home-portfolio.component.scss'],
    template: `
    <div class="parallex container overlay">
       <div class="center white-space">
            <span class="white-text padding large-text">Portfolio</span>
        </div>
    </div>
    <div class="flex-container">
        <div class="flex-item" *ngFor="let image of portfolioImages; index as i;">
            <img [ngClass]="{ 'img': true, 'hide-small': (i > 5) }" [src]="image.url">
        </div>
    </div>
    `
})
export class HomePortfolioComponent implements OnChanges {
    @Input()
    portfolioImages: [{}];
    constructor() {}

    ngOnChanges(changes) {
        if (changes.portfolioImages) {
            this.portfolioImages =  changes.portfolioImages.currentValue;
            console.log(this.portfolioImages)
        }
    }
}
