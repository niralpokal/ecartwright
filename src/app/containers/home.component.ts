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
    <home-portfolio></home-portfolio>
    <home-instagram></home-instagram>
    <home-about-me></home-about-me>
    `
})

export class HomeComponent implements OnInit {
    constructor (private imageService: ImageService) { }

    ngOnInit() {
       this.imageService.getHomeImages()
        .subscribe(data => console.log(data));
    }
}
