import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nav-bar',
    styleUrls: ['nav-bar.component.scss'],
    template: `
    <div class="top">
        <div [className]="class">
            <a class="nav-item nav-button">Home</a>
        </div>
    </div>
    `
})

export class NavBarComponent implements OnInit {
    class:string = 'bar';
    ngOnInit() {
        document.addEventListener('scroll', this.scroll, true); 
    }

    ngOnDestroy() {
        document.removeEventListener('scroll', this.scroll, true);
    }

    scroll = (e):void => { 
       let top = document.documentElement.scrollTop || document.body.scrollTop;
       if ( top >100) this.class = 'white-back nav-trans bar';
       else this.class = 'bar'; 
       console.log(this.class)
    }
}