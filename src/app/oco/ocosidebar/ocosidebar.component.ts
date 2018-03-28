import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'ocodashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'ocouser', title: "OCO's Profile",  icon:'ti-agenda', class: '' },
    { path: 'ocoregisters', title: 'Registers',  icon:'ti-pin-alt', class: '' },
    { path: 'ocoreport', title: 'Reports',  icon:'ti-envelope', class: '' },
    { path: 'oconotifications', title: 'Notifications',  icon:'ti-bell', class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'ocosidebar-cmp',
    templateUrl: 'ocosidebar.component.html',
    styleUrls: ['./ocosidebar.component.css']
})

export class OcoSidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        console.log(this.menuItems);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
