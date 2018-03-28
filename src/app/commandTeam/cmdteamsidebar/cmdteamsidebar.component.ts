import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'cmdteamdashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'cmdteamuser', title: "Profile",  icon:'ti-agenda', class: '' },
    { path: 'cmdteamtraders', title: "Traders",  icon:'ti-agenda', class: '' },
    { path: 'cmdteamentry', title: 'Entry of Premise',  icon:'ti-bell', class: '' },
    { path: 'cmdteamlicence', title: 'Licence',  icon:'ti-bell', class: '' },
    { path: 'cmdteamregisters', title: 'Registers',  icon:'ti-pin-alt', class: '' },
    { path: 'cmdteamreport', title: 'Reports',  icon:'ti-envelope', class: '' },
    { path: 'cmdteamnotifications', title: 'Notifications',  icon:'ti-bell', class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'cmdteamsidebar-cmp',
    templateUrl: 'cmdteamsidebar.component.html',
    styleUrls: ['./cmdteamsidebar.component.css']
})

export class CmdTeamSidebarComponent implements OnInit {

    name: string = "ABDULAHI ISMAILA";

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
