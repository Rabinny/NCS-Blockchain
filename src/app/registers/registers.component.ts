import { Component,OnInit } from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'registers-cmp',
    templateUrl: 'registers.component.html'
})

export class RegistersComponent implements OnInit {
    public registers:any[];

    ngOnInit() {
     this.registers = ['Raw Material Register', 'Daily Production Schedule', 'Operational Register', 'Finished Goods Register', 'Defective Goods Register']
    }
}