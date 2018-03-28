import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dcguser-cmp',
    moduleId: module.id,
    templateUrl: 'dcguser.component.html'
})

export class DcgUserComponent implements OnInit{

    dcg_name: string;
    location: string;
    dcgNumber: string;
    emailAddress: string;
    phoneNumber: string;
    zone: string;
    state: string;
    area_command: string;
    factoryLocation: string;
    factoryName:string;
    contact_officer: string;
    factory_number: string;
    commandType: string;

    ngOnInit(){
        this.dcg_name = "Lai Suleiman";
        this.location = "Yaba, Lagos Nigeria";
        this.dcgNumber = "NGN/007/AO/02";
        this.emailAddress = "jkolo@ncs.com";
        this.phoneNumber = "080238408773";
        this.state = "Lagos";
        this.zone = "Zone A";
        this.area_command = "Lagos";
        this.factoryName= "Apapa Beer Factory";
        this.factoryLocation = "No 38, Apapa Tin Can Island Apapa Lagos.";
        this.contact_officer = "Bode Oniyola";
        this.factory_number = "HH876RCTUT/9099";
        this.commandType = "Sea Port"

    }
}
