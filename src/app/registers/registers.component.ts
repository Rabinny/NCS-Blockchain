import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'registers-cmp',
    templateUrl: 'registers.component.html'
})

export class RegistersComponent implements OnInit {
    public registers:any[];
    rawMaterialsRegisterForm;
    productRegisterForm;

    constructor(private formBuilder:FormBuilder, private router:Router){
    	this.rawMaterialsRegisterForm = this.formBuilder.group({
        materialID: ['', Validators.compose([Validators.required])],
        name: ['', Validators.compose([Validators.required])],
        
      });

    	this.productRegisterForm = this.formBuilder.group({
        material: ['', Validators.compose([Validators.required])],
        productName: ['', Validators.compose([Validators.required])],
        quantity: ['', Validators.compose([Validators.required])],
        reason: ['', Validators.compose([Validators.required])],
        
      })
    }
    uploadRawMaterialsReg(data){
    	console.log(data);
    	console.log('uploading...');
    }

    uploadProductRegister(data){
    	console.log(data);
    }

    ngOnInit() {
     this.registers = ['Sugar Cane', 'Crude Oil']
    }
}