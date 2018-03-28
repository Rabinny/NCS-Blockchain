import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Constants } from '../utils/costants';

@Injectable()
export class EntryService {

    constructor(private http:Http, private router:Router) {}

    getAllForm41() {
        let url = Constants.GET_ALL_FORM_41;
        return this.http.get(url, Constants.getHeader());
    }

    checkForm41() {
        let user = localStorage.getItem('userId')
        let url = Constants.GET_FORM_41_BY_USER + user;
        return this.http.get(url, Constants.getHeader());
    }

    saveForm41(data) {
        let url = Constants.SAVE_NEW_FORM_41;
        return this.http.post(url, data, Constants.getHeader());
    }

    saveFormAttachment(data) {
        let url = Constants.SAVE_NEW_FORM_41_ATTACHMENT;
        return this.http.post(url, data, Constants.getHeader2())
    }

    getEntryType() {
        let url = Constants.ENTRY_TYPE;
        return this.http.get(url, Constants.getHeader());
    }

    getEntryTypeById(id) {
        let url = Constants.ENTRY_TYPE + '/' + id;
        return this.http.get(url, Constants.getHeader());
    }

    saveNewEntryType() {
        let url = Constants.ENTRY_TYPE;
        return this.http.post(url, Constants.getHeader());
    }

    getForm41Status() {
        let url = Constants.FORM_41_STATUS;
        return this.http.get(url, Constants.getHeader());
    }
    
}