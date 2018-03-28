import { Component, OnInit } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { AdminDashboardService } from '../services/admindashboard.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    styleUrls: ['user.component.css'],
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{


    company_name: string;
    location: string;
    rcNumber: string;
    tinNumber: string;
    emailAddress: string;
    phoneNumber: string;
    zone: string;
    state: string;
    area_command: string;
    factoryLocation: string;
    factoryName:string;
    contact_officer: string;
    factory_number: string;
    userCommand;
    userZone;
    isVerified: boolean = false;

    constructor(private signupService:SignupService, private adminDashboardService:AdminDashboardService, 
        private toastr: ToastsManager, private _vcr: ViewContainerRef,) {
            this.toastr.setRootViewContainerRef(_vcr);
    }

    ngOnInit(){
        
        this.checkUserStatus();
        this.getUserCommand();

        setTimeout(() => {
            this.getUserZone();
        }, 2000)
 

        setTimeout(() => {
            this.getUserDetails();
        }, 5000)

        console.log(localStorage);
    }

    getUserCommand() {
        this.signupService.getAllCommands().subscribe((response) => {
            let res = response.json();
            let commands = res.items;
           // this.commands = commands;
            let userCommand = localStorage.getItem('commandId');

            for(let command of commands) {
                if(command.commandid == userCommand ) {
                    this.userCommand = command; 
                    console.log(command);
                    console.log(userCommand);
                    localStorage.setItem('commandName', command.commandname);
                    localStorage.setItem('zoneId', command.idzone );

                }
            }
        })
    }

    getUserZone() {
        this.adminDashboardService.getAllZones().subscribe((response) => {
            let res = response.json();
            let zones = res.items;
            console.log(zones);
            
            let userZone = localStorage.getItem('zoneId');
            //let userZone = this.userCommand.idzone;
            console.log(userZone)

            for(let zone of zones) {
                if(userZone == zone.idzone) {
                    this.userZone = zone;
                    console.log(zone);
                    console.log(userZone)
                    localStorage.setItem('zoneName', zone.zonename);
                }
            }
        })
        
    }

    getUserDetails() {
        this.company_name = localStorage.getItem('companyName');
        this.location = localStorage.getItem('location');
        this.rcNumber = localStorage.getItem('rcNumber');
        this.tinNumber = localStorage.getItem('tinNumber');
        this.emailAddress = localStorage.getItem('email');
        this.phoneNumber = localStorage.getItem('phone');
        this.state = "Lagos";
        this.zone = localStorage.getItem('zoneName')
        this.area_command = localStorage.getItem('commandName');
        this.factoryName= localStorage.getItem('companyName');;
        this.factoryLocation = localStorage.getItem('location');
        this.contact_officer = localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName');
        this.factory_number = "";
    }

    checkUserStatus() {
        let isVerified = localStorage.getItem('isAccountVerified');
        isVerified.toString();
        console.log(isVerified);
        if( isVerified === '0') {
            this.isVerified = true;
            console.log("The account is not verified");
          
            
        }
    }

}
