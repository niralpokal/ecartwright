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
            <p>Location:</p>
            <img src="../../../assets/profile.jpg" >
        </div>
        <div class="flex-item">
            <p> Drop a dime here</p>
            <input>

        </div>    
    </div>
    `
})

export class HomeContactComponent {

}