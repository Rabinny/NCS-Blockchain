import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from '../../services/admindashboard.service'
// import * as Chartist from 'chartist';

declare var $:any;

@Component({
    selector: 'admindashboard-cmp',
    moduleId: module.id,
    templateUrl: 'admindashboard.component.html'
})

export class AdminDashboardComponent implements OnInit{

  business_description: string;
  company_name: string;
  location: string;
  tin_number: string;
  email: string;
  phone_number: string;
  name: string;
  address: string;
  business_purpose;
  rc_number: number;
  roles: any = [];
  zones: any = [];
  
    constructor(private adminDashboardService:AdminDashboardService) {}

    ngOnInit() {

      this.getAllRoles();
      this.getAllZones();
    }

    getAllRoles() {
      this.adminDashboardService.getAllRoles().subscribe((response) => {
        let res = response.json();
        console.log(res);
        this.roles = res.items;
      })
    }

    getAllZones() {
      this.adminDashboardService.getAllZones().subscribe((response) => {
        let res = response.json();
        console.log(res);
        this.zones = res.items;
      })
    }
}
