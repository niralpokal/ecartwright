import { Component, Input, OnChanges } from '@angular/core';

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
        <div class="flex-item" *ngFor="let image of instagramImages; index as i">
            <img [ngClass]="{ 'img': true, 'hide-small': (i > 3) }" [src]="image.url">
        </div>
    </div>
    `
})

export class HomeInstagramComponent implements OnChanges {
    @Input()
    instagramImages: [{}];

    ngOnChanges(changes) {
        if (changes.instagramImages.currentValue) {
            const images = changes.instagramImages.currentValue;
            let count = 0;
            this.instagramImages = images.map(image => {
                const transform = 'upload/w_300,h_300,c_fill';
                const curUrl = image.url.split('upload');
                curUrl[0] = curUrl[0] + transform;
                image.url = curUrl.join('');
                return image;
            })
            .filter(item => {
                count++;
                return (count > 8) ? false : true;
            });
        }
    }
}
