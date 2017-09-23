import { Component } from '@angular/core';

@Component({
    selector:'home-portfolio',
    styleUrls: ['home-portfolio.component.scss'],
    template: `
    <div class="parallex container overlay">
       <div class="center white-space">     
            <span class="black padding large-center-text">Portfolio</span>
        </div>
    </div>
    <div class="flex-container">
        <div class="flex-item">
            <img class="img" src="../../assets/profile.jpg">
        </div>
        <div class="flex-item">
            <img class="img" src="../../assets/profile.jpg">
        </div>
        <div class="flex-item">
            <img class="img" src="../../assets/profile.jpg">
        </div>
        <div class="flex-item">
            <img class="img" src="../../assets/profile.jpg">
        </div>
        </div>
        <div class="flex-container">
        <div class="flex-item">
            <img class="img" src="../../assets/profile.jpg">
        </div>
        <div class="flex-item">
            <img class="img" src="../../assets/profile.jpg">
        </div>
        <div class="flex-item">
            <img class="img" src="../../assets/profile.jpg">
        </div>
        <div class="flex-item">
            <img class="img" src="../../assets/profile.jpg">
        </div>
    </div>
    `
})
export class HomePortfolioComponent {

} 