import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'user', title: "Trader's Profile",  icon:'ti-agenda', class: '' },
    { path: 'entry', title: 'Entry of Premise',  icon:'ti-pin', class: '' },
    { path: 'guarantees', title: 'Bank Guarantees',  icon:'ti-pencil-alt2', class: '' },
    { path: 'uca', title: 'Unit Cost Analysis',  icon:'ti-mouse', class: '' },
    { path: 'registers', title: 'Registers',  icon:'ti-pin-alt', class: '' },
    { path: 'licence', title: 'Licence',  icon:'ti-id-badge', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
       // console.log(this.menuItems);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
