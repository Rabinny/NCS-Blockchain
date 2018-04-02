import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Constants } from '../utils/costants';

@Injectable()
export class RegistersService {
    
    constructor(private http:Http) {}


    saveMaterialRegister(info) {
     	console.log('service data');
     	console.log(info);
        let url = 'http://130.162.69.18/bcsgw/rest/v1/transaction/invocation';
        let data = {
        "channel":"testorderer",
        "chaincode":"exciseprocess",
        "method":"addToMateriallRegistery",
        "args":['material2364', 'sugar', ],
        "chaincodeVer":"v1"
     };
     let jsonData = JSON.stringify(data);
     return this.http.post(url, jsonData )

        //return this.http.get(url);
    }

     saveProductRegister(data) {
        let url = Constants.SAVE_NEW_FORM_41_ATTACHMENT;
        return this.http.post(url, data, Constants.getHeader2())
    }


  }