import { Component } from '@angular/core';

@Component({
    selector: 'home-about-me',
    styleUrls: ['home-about-me.component.scss'],
    template: `
    <div class="parallex container overlay">
        <div class="center white-space">
            <span class="white-text padding large-text">About Me</span>
        </div>
    </div>
    <div class="flex-container-row">
        <div class="flex-container-col">
            <p style="white-space:pre-line;">
                {{intro}}
            <p>
        </div>
        <div class="flex-container-col candid">
            <div class="flex-item">
                <img class="img img-center" src="../../../assets/profile.jpg" height="400">
            </div>
        </div>
    </div>
    <div class="flex-container-col">
        <div class="flex-item">
            <div class="link-container">
                <p>Email: </p>
                <a href="mailto:emma.cartwright.43@gmail.com">emma.cartwright.43@gmail.com</a> 
            </div>
        </div>
        <div class="flex-item">
            <div class="link-container">
                <p>Phone:</p>
                <a href="tel://302.540.2575">(302) 540-2575</a>
            </div>
        </div>
        <div class="flex-item">
            <div class="link-container">
                <p>LinkedIn: </p>
                <a href="https://linkedin.com/in/emmacartwright">linkedin.com/in/emmacartwright</a>
            </div>
        </div>
    </div>
    `
})

export class HomeAboutMeComponent{
    intro:string = 
    `Thanks for stopping by! I am a young account professional working and living my dream in Los Angeles, California. Born in Stoke-on-Trent, England, I came to America at 2 years old and therefore lack the neat accent. I was raised outside of Philadelphia, Pennsylvania next door to the mushroom farming capital of the world. I attended Penn State, double majoring in Advertising and Integrated Art with a focus on Design and Photography. I graduated in 2014 and made the cross country trek to LA in August of that year. 
    
    I have a passion for all things creative, especially in advertising. My desire to seek creativity, achieve excellence, learn quickly, and adapt to changing situations has led me to be a part of the national advertising team for one of the largest automotive companies in the US. I currently work on the Honda account at RPA and I’m so proud to collaborate with a company dedicated to imagination, dreams, and people. I love great work and I am inspired every day. 
    
    Outside of advertising, I find happiness in my cat (Grace Kelly of Meownaco), weekend trips, trying out random hobbies (whittling, long boarding, and watercolor to name a few), Reddit, and watching YouTube.
    `;
}
