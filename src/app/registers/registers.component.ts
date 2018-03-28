import { Component,OnInit } from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'registers-cmp',
    templateUrl: 'registers.component.html'
})

export class RegistersComponent implements OnInit {
    public registers:any[];

    ngOnInit() {
     this.registers = ['Sugar Cane', 'Crude Oil']
    }
}