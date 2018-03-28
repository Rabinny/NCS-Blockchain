import { Component,OnInit } from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'cacregisters-cmp',
    templateUrl: 'cacregisters.component.html'
})

export class CacRegistersComponent implements OnInit {
    public registers:any[];
    public traders: any[];

    ngOnInit() {
     this.registers = ['Raw Material Register', 'Daily Production Schedule', 'Operational Register', 'Finished Goods Register', 'Defective Goods Register']
     this.traders = ['British American Tobacco', 'Sona Brewries', 'International Brewries'];
    }
}