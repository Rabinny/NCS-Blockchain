import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'admin', title: 'Admin Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'adminusers', title: "Users",  icon:'ti-user', class: '' },
    { path: 'adminzones', title: 'Zones',  icon:'ti-layout', class: '' },
    { path: 'adminroles', title: 'Roles',  icon:'ti-bolt', class: '' },
    { path: 'adminroleaccess', title: 'Role Access',  icon:'ti-unlock', class: '' },
    { path: 'admindocumentregister', title: 'Document Register',  icon:'ti-notepad', class: '' },
    { path: 'adminassignment', title: 'Assignment',  icon:'ti-pin2', class: '' },
    { path: 'adminnotification', title: 'Notifications',  icon:'ti-slice', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'adminsidebar-cmp',
    templateUrl: 'adminsidebar.component.html',
    styleUrls: ['./adminsidebar.component.css']
})

export class AdminSidebarComponent implements OnInit {
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
