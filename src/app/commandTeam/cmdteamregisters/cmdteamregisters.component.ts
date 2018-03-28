import { Component,OnInit } from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'cmdteamregisters-cmp',
    templateUrl: 'cmdteamregisters.component.html'
})

export class CmdTeamRegistersComponent implements OnInit {
    public registers:any[];

    ngOnInit() {
     this.registers = ['Raw Material Register', 'Daily Production Schedule', 'Operational Register', 'Finished Goods Register', 'Defective Goods Register']
    }
}