import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Constants } from '../utils/costants';

@Injectable()
export class SignupService {

    constructor(private http:Http) {}

    registerUser(data) {
        let reqData = data;
        //let url = "https://dbrest-bamoraclecloudaccount01.gbcom-south-1.oraclecloud.com/ords/pdb1/ncs/system/users/";
        let url = Constants.SAVE_NEW_USER_INFORMATION;
        return this.http.post(url, reqData, Constants.getHeader())
    }

    getUser(data) {
        let url = Constants.GET_A_USER_BY_EMAIL;
        return this.http.get(url);
    }

    registerUserInfo(data) {
        let reqData = data;
        let url = Constants.SAVE_USER_INFO
        return this.http.post(url, reqData, Constants.getHeader());
    }

    getRoles() {
        let url = Constants.GET_ALL_ROLES;
        return this.http.get(url);
    }

    addRole(data) {
        let url = Constants.SAVE_NEW_ROLE_ACCESS_INFO;
         return this.http.post(url, data, Constants.getHeader());
    }

    findUserByEmail() {
       // Constants.USER_EMAIL(data.email);
       let email  = localStorage.getItem("email");
       let url = Constants.GET_A_USER_BY_EMAIL + email;
       console.log(url);
       url.toString();
       return this.http.get(url, Constants.getHeader());
    }

    findUserById(data) {
        Constants.USER_ID(data.userId);
        let url = Constants.GET_A_USER_BY_ID + data.userId;
        return this.http.get(url, Constants.getHeader());
    }

    findUserInfoById() {
        let userId = localStorage.getItem('userId');
        let url = Constants.GET_USER_INFO_BY_ID + userId;
        url.toString();
        return this.http.get(url, Constants.getHeader());
    }

    getAllCommands() {
        let url = Constants.GET_ALL_COMMANDS_API;
        return this.http.get(url,Constants.getHeader());
    }

    


}