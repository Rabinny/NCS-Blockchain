import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cacuser-cmp',
    moduleId: module.id,
    templateUrl: 'cacuser.component.html'
})

export class CacUserComponent implements OnInit{

    cac_name: string;
    location: string;
    cacNumber: string;
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
        this.cac_name = "James Kolo";
        this.location = "Yaba, Lagos Nigeria";
        this.cacNumber = "NGN/007/AO/19";
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
