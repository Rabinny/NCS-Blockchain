import { Component,OnInit } from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'cmdteamtraders-cmp',
    templateUrl: 'cmdteamtraders.component.html'
})

export class CmdTeamTradersComponent implements OnInit {
    public registers:any[];

    ngOnInit() {
     this.registers = ['Raw Material Register', 'Daily Production Schedule', 'Operational Register', 'Finished Goods Register', 'Defective Goods Register']
    }
}