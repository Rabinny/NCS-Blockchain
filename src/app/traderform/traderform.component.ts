import { Component,OnInit } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { Router } from '@angular/router';
// import { UsersService } from '../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
    moduleId: module.id,
    selector: 'traderform-cmp',
    templateUrl: 'traderform.component.html'
})

export class TraderFormComponent  {

    formDisplay: boolean = true;
    assignOfficer: boolean = false;

    constructor() { }

    processRequest() {
        this.formDisplay = true;
       
    }

}