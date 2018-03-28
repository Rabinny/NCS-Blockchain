import { Component,OnInit } from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'ocoreports-cmp',
    templateUrl: 'ocoreports.component.html'
})

export class OcoReportsComponent implements OnInit {
    public reports;
    
    ngOnInit() {
        this.reports = ['Entry of Premises', 'Revised Entry of Premises', 'Licence Renewal', 'Factory Completion', 'Others'];
     
    }
}