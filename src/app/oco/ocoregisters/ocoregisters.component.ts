import { Component,OnInit } from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'ocoregisters-cmp',
    templateUrl: 'ocoregisters.component.html'
})

export class OcoRegistersComponent implements OnInit {
    public registers:any[];

    ngOnInit() {
     this.registers = ['Raw Material Register', 'Daily Production Schedule', 'Operational Register', 'Finished Goods Register', 'Defective Goods Register']
    }
}