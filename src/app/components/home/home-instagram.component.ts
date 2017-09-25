import { Component } from '@angular/core';

@Component({
    selector: 'home-instagram',
    styleUrls: ['home-instagram.component.scss'],
    template: `
    <div class="container parallex overlay">
        <div class="center">
            <span class="padding black text-large">Instagram</span>
        </div>
    </div>
    <div class="flex-container">
        <div class="flex-item" *ngFor="let i of images;">
            <img class="img" src="../../../assets/profile.jpg">
        </div>
    </div>
    `
})

export class HomeInstagramComponent{
    images = Array(4).fill('');
}