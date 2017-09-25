import { Component } from '@angular/core';

@Component({
    selector: 'home-contact',
    styleUrls: ['home-contact.component.scss'],
    template: `
    <div class="parallex container overlay">  
        <div class="center white-space">     
            <span class="black padding large-center-text">Contact Me</span>
        </div>
    </div>
    <div class="flex-container">
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
        <div>  
    </div>
    `
})

export class HomeContactComponent {

}