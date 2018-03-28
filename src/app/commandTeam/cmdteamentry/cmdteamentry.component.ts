import { Component, OnInit } from '@angular/core';
import { Constants } from '../../utils/costants';
import { EntryService } from '../../services/entry.service';
import { Router } from '@angular/router';


@Component({
    selector: 'cmdteamentry-cmp',
    moduleId: module.id,
    templateUrl: 'cmdteamentry.component.html'
})

export class CmdTeamEntryComponent implements OnInit{

    noForm: boolean = false;
    form41: any = [];
    formMessage;


    constructor(private entryService:EntryService, private router:Router) {}

    ngOnInit() {
        this.getForm41();
    }

    getForm41() {
        this.entryService.getAllForm41().subscribe((response) => {
            let res = response.json();
            console.log(res);
            let tx:any = [];
            let form41 = res.items;
            for(let form of form41) {
                if(form.STATUS === "PENDING") {
                    tx.push(form);
                }
            }
           this.form41 = tx;
           if(tx.length === 0) {
               this.noForm = true;
               this.formMessage = "No entry of premise request submitted by traders within the command";
           }
        })
    }

    review(data) {
        let formRef = data.FORMREF;
        let cName = data.CNAME;
        let regAddr = data.REGISTEREDADDRESS;
        let businessDescription = data.DESCRIPTIONOFBUSINESS;
        let businessPurpose = data.PURPOSEOFBUSINESS;
        let entryStatus = data.STATUS;
        let submissionDate = data.DATERECEIVED;
        let entryType = data.COMMENTS;

        localStorage.setItem('formRef', formRef);
        localStorage.setItem('cName', cName);
        localStorage.setItem('regAddr', regAddr);
        localStorage.setItem('businessDescription', businessDescription);
        localStorage.setItem('businessPurpose', businessPurpose);
        localStorage.setItem('entryStatus', entryStatus);
        localStorage.setItem('entryType', entryType);
        localStorage.setItem('submissionDate', submissionDate);

        console.log(data);
        console.log(localStorage);
        this.router.navigateByUrl('cmdteamform41')
    }

}
