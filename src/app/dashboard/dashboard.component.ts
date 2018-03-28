import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {DashboardService} from '../services/dashboard.service';
import { Constants } from '../utils/costants';

declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  rcNumber
  companyName;
  phoneNumber;
  tinNumber;
  isAdmin;
  location;
  name;
  email;
  isVerified;

    constructor(private dashbordService:DashboardService) {}
  
    ngOnInit(){

      this.isVerified = Constants.checkUserStatus();
      console.log(this.isVerified);
      
        var dataSales = {
          labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
          series: [
             [287, 385, 490, 562, 594, 626, 698, 895, 952],
            [67, 152, 193, 240, 387, 435, 535, 642, 744],
            [23, 113, 67, 108, 190, 239, 307, 410, 410]
          ]
        };

        var optionsSales = {
          low: 0,
          high: 1000,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: true,
          showPoint: false,
        };

        var responsiveSales: any[] = [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        new Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


        var data = {
          labels: ['Jan', 'Feb', 'Mar'],
          series: [
            [542, 543, 520],
            [54, 53, 52]
          ]
        };

        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "250px"
        };

        var responsiveOptions: any[] = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        new Chartist.Line('#chartActivity', data, options, responsiveOptions);

        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };

        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };

        new Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

        new Chartist.Pie('#chartPreferences', {
          labels: ['62%','32%','6%'],
          series: [62, 32, 6]
        });

        this.userDetails();
    }

    userDetails() {


      this.dashbordService.getUserInfo().subscribe((response) => {
        console.log(response.json());
        let res = response.json();
        let user = res.items[0];


        this.rcNumber = user.rcnumber;
        this.tinNumber = user.tinnumber;
        this.companyName = user.companyname;
        //this.phoneNumber = user.phoneNumber;
        this.isAdmin = user.isadmin;
        this.location = user.location;
        this.name = localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName');
       
        this.email = localStorage.getItem('email');

        localStorage.setItem('rcNumber', this.rcNumber );
        localStorage.setItem('companyName', this.companyName);
        localStorage.setItem('tinNumber', this.tinNumber);
      //  localStorage.setItem('phoneNumber', this.phoneNumber);
        localStorage.setItem('isAdmin', this.isAdmin);
        localStorage.setItem('location', this.location);

      })
    }




}
