import { Component } from '@angular/core';

@Component({
    selector: 'home-instagram',
    styleUrls: ['home-instagram.component.scss'],
    template: `
    <div class="container parallex overlay">
        <div class="center">
            <span class="padding white-text large-text">Instagram</span>
        </div>
    </div>
    <div class="flex-container">
        <div class="flex-item" *ngFor="let image of images; index as i">
            <img [ngClass]="{ 'img': true, 'hide-small': (i > 3) }" src="../../../assets/profile.jpg">
        </div>
    </div>
    `
})

export class HomeInstagramComponent {
    images = Array(8).fill('');
}
