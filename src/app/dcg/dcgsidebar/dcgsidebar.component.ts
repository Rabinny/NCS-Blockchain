import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dcgdashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'dcguser', title: "Deputy Controller",  icon:'ti-user', class: '' },
    { path: 'dcgassign', title: 'Assign Officer',  icon:'ti-pin', class: '' },
    { path: 'dcgapprovals', title: 'Approvals',  icon:'ti-pencil-alt2', class: '' },
    { path: 'dcgnotifications', title: 'Notifications',  icon:'ti-bell', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'dcgsidebar-cmp',
    templateUrl: 'dcgsidebar.component.html',
    styleUrls: ['./dcgsidebar.component.css']
})

export class DcgSidebarComponent implements OnInit {
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
