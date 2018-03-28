import { Injectable, OnInit } from '@angular/core'
import { Http } from '@angular/http';
import  { Constants } from '../utils/costants';



@Injectable()

export class DashboardService {

    constructor(private http:Http) {}

    getUserInfo() {
       // localStorage.getItem('userId');
        //localStorage.setItem('userId', 'jeffrillino ');
        let userId = localStorage.getItem('userId');
        let url = Constants.GET_USER_INFO_BY_ID + userId;
        console.log(url);
        return this.http.get(url, Constants.getHeader());
    }
}