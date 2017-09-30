import { Component, OnInit } from '@angular/core';
const topNavBarClass: string = 'nav-bar-class';
const scrollNavBarClass: string = `${topNavBarClass} white-back nav-trans`;

@Component({
    selector: 'nav-bar',
    styleUrls: ['nav-bar.component.scss'],
    template: `
    <div class="top">
        <div [className]="navBarClass">
            <a class="nav-item-class" *ngFor="let item of navBarItems">{{item}}</a>
            <ng-template ngFor let-item let-i="index" let-f="first" [ngForOf]="navBarItems">
                <a [ngClass]="{ 'small-nav-item-class': true, 'hidden':!f }">
                   {{item}}
                </a>
            </ng-template>
        </div>
    </div>
    `
}) 

export class NavBarComponent implements OnInit {
    navBarClass:string = topNavBarClass;
    navBarItems:[string] = ['Home', 'Portfolio', 'Instagram', 'Other'];

    ngOnInit() {
        document.addEventListener('scroll', this.scroll, true); 
    }

    ngOnDestroy() {
        document.removeEventListener('scroll', this.scroll, true);
    }

    scroll = (e):void => { 
       let top: number = document.documentElement.scrollTop || document.body.scrollTop;
       debugger;
       if (top > 200) this.navBarClass = scrollNavBarClass;
       else this.navBarClass = topNavBarClass; 
    }
}