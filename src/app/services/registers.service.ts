import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Constants } from '../utils/costants';

@Injectable()
export class RegistersService {

    constructor(private http:Http) {}


     saveMaterialRegister(data) {
        let url = Constants.GET_A_USER_BY_EMAIL;
        return this.http.get(url);
    }

     saveProductRegister(data) {
        let url = Constants.SAVE_NEW_FORM_41_ATTACHMENT;
        return this.http.post(url, data, Constants.getHeader2())
    }


  }