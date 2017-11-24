import { Component, OnInit } from '@angular/core';


import { ImageService } from '../services/image.service';
@Component({
    selector: 'home',
    styleUrls: ['home.component.scss'],
    template: `
    <div class="parallex container overlay">
        <div class="center white-space">
            <span class="padding"><img class="logo" src="../../assets/logo.png"></span>
        </div>
    </div>
    <home-portfolio [portfolioImages]="portfolioImages"></home-portfolio>
    <home-instagram [instagramImages]="instagramImages"></home-instagram>
    <home-about-me></home-about-me>
    `
})

export class HomeComponent implements OnInit {
    constructor (private imageService: ImageService) { }
    portfolioImages: [{}];
    instagramImages: [{}];
    ngOnInit() {
       this.imageService.getHomeImages()
        .subscribe(data => {
           const portfolio = data.resources.filter(item => (item.public_id.includes('natural')) ? true : false);
           const instagram = data.resources.filter(item => (item.public_id.includes('studio')) ? true : false);
           this.portfolioImages = portfolio;
           this.instagramImages = instagram;
        });
    }
}
