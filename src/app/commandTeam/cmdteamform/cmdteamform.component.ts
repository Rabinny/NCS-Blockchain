import { Component,OnInit } from '@angular/core';
import { EntryService } from '../../services/entry.service';



@Component({
    moduleId: module.id,
    selector: 'cmdteamform-cmp',
    templateUrl: 'cmdteamform.component.html'
})

export class CmdTeamFormComponent implements OnInit {
    formRef;
    companyName;
    registeredAddress
    businessDescription;
    businessPurpose;
    entryStatus;
    entryType;
    submissionDate;
    formStatus;

    constructor(private entryService:EntryService) {}

    ngOnInit() {
        this.getForm41Details();
        this.getEntryStatus()
    }

    getForm41Details() {
       this.formRef = localStorage.getItem('formRef');
       this.companyName = localStorage.getItem('cName');
        this.registeredAddress = localStorage.getItem('regAddr');
        this.businessDescription = localStorage.getItem('businessDescription');
        this.businessPurpose = localStorage.getItem('businessPurpose');
        this.entryStatus = localStorage.getItem('entryStatus');
        this.entryType = localStorage.getItem('entryType');
        this.submissionDate = localStorage.getItem('submissionDate');

    }

    getEntryStatus() {
        this.entryService.getForm41Status().subscribe((response) => {
            let res = response.json();
            let tx: any = [];
            let form41 = res.items;
            for(let form of form41) {
                if(form.statusid === "PENDING" || form.statusid === "ENTRY REVIEWED") {
                    tx.push(form);
                }
            }
            console.log(tx);
            this.formStatus = tx;
        })
    }
}