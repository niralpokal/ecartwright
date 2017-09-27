import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nav-bar',
    styleUrls: ['nav-bar.component.scss'],
    template: `
    <div class="top">
        <div [className]="navBarClass">
            <a class="nav-item nav-button">Home</a>
            <a class="nav-item nav-button">Portfolio</a>
            <a class="nav-item nav-button">Instagram</a>
            <a class="nav-item nav-button">Other</a>
        </div>
    </div>
    `
})

export class NavBarComponent implements OnInit {
    navBarClass:string = 'bar';

    ngOnInit() {
        document.addEventListener('scroll', this.scroll, true); 
    }

    ngOnDestroy() {
        document.removeEventListener('scroll', this.scroll, true);
    }

    scroll = (e):void => { 
       let top = document.documentElement.scrollTop || document.body.scrollTop;
       if (top > 200) this.navBarClass = 'white-back nav-trans bar';
       else this.navBarClass = 'bar'; 
    }
}