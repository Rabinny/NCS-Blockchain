import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EntryService } from '../services/entry.service';
import { Observable } from 'rxjs/Observable';
import  { Constants } from '../utils/costants';


@Component({
    selector: 'entry-cmp',
    moduleId: module.id,
    templateUrl: 'entry.component.html'
})

export class EntryComponent{

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
  form_ref;
  entryForm;
  entryMessage;
  isExist: boolean = false;

  pending: number;
  rejected: number;
  ongoingInspection: number;
  approved: number;

  form41:any[];
  pendingStatus: any = [];
  approvedStatus: any =[];
  inspectionOngoing: any = [];
  rejectedStatus: any = [];
  entryType: any = [];
  isVerified: boolean;

  constructor(private formBuilder:FormBuilder, private entryService:EntryService) {
      this.entryForm = formBuilder.group({
        cname: ['', Validators.compose([Validators.required])],
        registeredAddress: ['', Validators.compose([Validators.required])],
        descriptionOfBusiness: ['', Validators.compose([Validators.required])],
        purposeOfBusiness: ['', Validators.compose([Validators.required])],
        buildingEstimate: ['', Validators.compose([Validators.required])],
        plantsAndMachinery: ['', Validators.compose([Validators.required])],
        goodsDescription: ['', Validators.compose([Validators.required])],
        factoryCompletionDate: ['', Validators.compose([Validators.required])],
        rawMaterialsAndCompositionFormulae: ['', Validators.compose([Validators.required])],
        brandNames: ['', Validators.compose([Validators.required])],
        entryType: ['', Validators.compose([Validators.required])]
      })
  }

  ngOnInit() {
        this.isVerified = Constants.checkUserStatus();
        this.getForm41ByUserId();
        this.getEntryType();
        this.getForm41Status();
  }

  registerForm41() {
    let isValid = false;
    let isVerified = this.isVerified;

    if(isVerified) {
      this.isExist = true;
      this.entryMessage = "Operation not permitted while user account is not verified";
      return;
    }

    let fb = this.entryForm.value;
    if(this.entryForm.valid) {
      isValid = true;
    }

    if(isValid) {
      let userId = localStorage.getItem('userId');
      let data = {}
      let counter:any = this.form41.length + 1;
      let idForm =  userId + '/' + counter ; 
      console.log(counter)
      data['cname'] = fb.cname.toUpperCase();
      data['registeredaddress'] = fb.registeredAddress.toUpperCase();
      data['iduser'] = localStorage.getItem('userId')   //.toUpperCase();
      data['descriptionofbusiness'] = fb.descriptionOfBusiness.toUpperCase();
      data['purposeofbusiness'] = fb.purposeOfBusiness.toUpperCase();
      data['comments'] = fb.entryType.toUpperCase();
      data['status'] = 'pending'.toUpperCase();  
        console.log(data);
  
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDay() + 1;
        let zone = 1;
        
        
  
  
        data['formref'] = 'NCS/EX/' + zone + '/' + year + '/' + month + '/' + day + '/' + userId + '/' + counter ;         
        console.log(data['formref']);
  
        this.entryService.saveForm41(data).subscribe((response) => {
          let res = response
         let  result = res.toString();    
          console.log(res);
          if(result.startsWith('Response with status: 200 OK')) {
            console.log("checking for form submission");  
            this.isExist = true;
            this.entryMessage = fb.entryType + " submission is completed";
            this.clearForm();
            this.getForm41ByUserId();
          }
          this.uploadFile(counter, fb);
        })
    }

  }

  checkCounter() {
    this.entryService.checkForm41().subscribe((response) => {
      let res = response.json();
      if(res.statusText === 'OK') {
        let items = res.items;
        let length = items.length + 1;
        return length;
      }
    }, (error) => {
      this.isExist = true;
      this.entryMessage = "Form submission not completed please contact System Administrator";
      
    })
  }

  getForm41ByUserId() {
    this.entryService.checkForm41().subscribe((response) => {
      let res = response.json();
      let form41 = res.items;
      this.form41 = form41;
      console.log(this.form41);

      this.approvedStatus = [];
      this.inspectionOngoing = [];
      this.rejectedStatus = [];
      this.pendingStatus = [];

      for(let form of this.form41) {
        let tx = {
          formref : form.FORMREF,
          cname : form.CNAME,
          status : form.STATUS
        }
        //console.log(tx);
       this.getStatus(tx);
      }
      this.approved = this.approvedStatus.length;
      this.rejected = this.rejectedStatus.length;
      this.pending = this.pendingStatus.length;
      this.ongoingInspection = this.inspectionOngoing.length;

      console.log(this.approved);
      console.log(this.pending);


      //console.log(res);
    }, (error) => {
      console.log(error);
    })
  }

  getStatus(tx) {
    if(tx.status === "APPROVED") {
       this.approvedStatus.push(tx);
    } else if(tx.status === "PENDING") {
       this.pendingStatus.push(tx);
    } else if(tx.status === "REJECTED") {
       this.rejectedStatus.push(tx);
    } else {
       this.inspectionOngoing.push(tx);
    }
  }

  clearForm() {
    this.entryForm.controls.cname.setValue('');
    this.entryForm.controls.registeredAddress.setValue('');
    this.entryForm.controls.descriptionOfBusiness.setValue('');
    this.entryForm.controls.purposeOfBusiness.setValue('');
    this.entryForm.controls.buildingEstimate.setValue('');
    this.entryForm.controls.plantsAndMachinery.setValue('');
    this.entryForm.controls.goodsDescription.setValue('');
    this.entryForm.controls.factoryCompletionDate.setValue('');
    this.entryForm.controls.rawMaterialsAndCompositionFormulae.setValue('');
    this.entryForm.controls.brandNames.setValue('');
    this.entryForm.controls.entryType.setValue('');
  }

  uploadFile(counter, data) {
    let fileInput:any = document.getElementById('brand');
    let file = fileInput.files[0];
    let formData = new FormData()
    formData.append('idForm', counter);
    formData.append('image', file);
    formData.append('title', data.cname);
    formData.append('description', data.descriptionOfBusiness);
    formData.append('status', 'pending');
    
    this.entryService.saveFormAttachment(formData).subscribe((response)=> {
      let res = response.json;
      console.log(res);
    },(error) => {
      console.log(error);
    });
  }

  getEntryType() {
    this.entryService.getEntryType().subscribe((response) => {
      let res = response.json();
      console.log(res.items);
      this.entryType = res.items
    })
  }

  getForm41Status() {
    this.entryService.getForm41Status().subscribe((response) => {
      let res = response.json();
      let status = res.items;
      console.log(status);
    })
  }
    
}
