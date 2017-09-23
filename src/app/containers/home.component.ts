import { Component } from '@angular/core';

@Component({
    selector: 'home',
    styleUrls:['home.component.scss'],
    template: `
    <div class="parallex container overlay">
        <div class="center pre-white">
            <span class="padding"><img class="logo" src="../../assets/logo.png"></span>
        </div>
    </div>
    <home-about-me></home-about-me>
    <home-portfolio></home-portfolio>
    <home-contact></home-contact>
    `
})

export class HomeComponent {

}