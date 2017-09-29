import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nav-bar',
    styleUrls: ['nav-bar.component.scss'],
    template: `
    <div class="top">
        <div [className]="navBarClass">
            <a class="nav-item nav-button hide-small-down">Home</a>
            <a class="nav-item nav-button hide-small-down">Portfolio</a>
            <a class="nav-item nav-button hide-small-down">Instagram</a>
            <a class="nav-item nav-button hide-small-down">Other</a>
            <a class="nav-item-block nav-button hide-med-up">Home</a>
            <a class="nav-item-block nav-button hide-med-up">Portfolio</a>
            <a class="nav-item-block nav-button hide-med-up">Instagram</a>
            <a class="nav-item-block nav-button hide-med-up">Other</a>
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