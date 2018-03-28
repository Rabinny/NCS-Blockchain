import { Component,OnInit } from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'cmdteamreports-cmp',
    templateUrl: 'cmdteamreports.component.html'
})

export class CmdTeamReportsComponent implements OnInit {
    public reports;
    
    ngOnInit() {
        this.reports = ['Entry of Premises', 'Revised Entry of Premises', 'Licence Renewal', 'Factory Completion', 'Others'];
     
    }
}