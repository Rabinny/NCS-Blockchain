import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'cacdashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'cacuser', title: "Area Controller",  icon:'ti-user', class: '' },
    { path: 'cacassign', title: 'Assign Officer',  icon:'ti-pin', class: '' },
    { path: 'cacapprovals', title: 'Approvals',  icon:'ti-pencil-alt2', class: '' },
    { path: 'cacnotifications', title: 'Notifications',  icon:'ti-bell', class: '' },
    { path: 'cacregisters', title: 'Registers',  icon:'ti-pin-alt', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'cacsidebar-cmp',
    templateUrl: 'cacsidebar.component.html',
    styleUrls: ['./cacsidebar.component.css']
})

export class CacSidebarComponent implements OnInit {
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
