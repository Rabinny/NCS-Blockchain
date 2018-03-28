import {Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Constants } from '../utils/costants';


@Injectable()
export class AdminDashboardService {

    constructor( private http:Http) {}

    getAllRoles() {
        let url = Constants.GET_ALL_ROLES;
        return this.http.get(url, Constants.getHeader());
    }

    getAllZones() {
        let url = Constants.ZONES_API;
        return this.http.get(url, Constants.getHeader());
    }

}