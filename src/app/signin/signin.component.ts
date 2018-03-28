import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import  { SignupService } from '../services/signup.service';
//import { setTimeout } from 'timers';


  
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  
  emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';



  constructor( private router:Router, public formBuilder: FormBuilder, private dashboardService:DashboardService, private signupService:SignupService) {
    this.loginForm = formBuilder.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern(this.emailRegex), Validators.required])]
    });
   }

  ngOnInit() {
    localStorage.clear();
  }

  login() {
    localStorage.clear()
    let fb = this.loginForm.value;
    console.log("Inside the login method");
    console.log(fb);
    let email = fb.email;
    let password = fb.password;
    localStorage.setItem('email', email);
   let profileType
  // let email
   let commandId 
   let isAccountVerified
   let userId
   let firstName;
   let lastName;
   let phone


    this.signupService.findUserByEmail().subscribe((response) => {
      let res = response.json();
      let users = res.items;
      let user = res.items[0];
      console.log(user.profiletype);
      console.log(user);
      if(users.length > 0) {
        
        profileType = user.profiletype;
        email = user.email;
        commandId = user.commandid;
        isAccountVerified = user.isaccountverified;
        userId = user.userid;
        
        firstName = user.firstname;
        lastName = user.lastname;
        phone = user.phone.toString();

        console.log(firstName + ' ' + lastName);
        console.log(phone);

        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('profileType', profileType);
        localStorage.setItem('email', email);
        localStorage.setItem('commandId', commandId);
        localStorage.setItem('isAccountVerified', isAccountVerified);
        localStorage.setItem('userId', userId);
        localStorage.setItem('phone', phone);
        //localStorage.setItem('name', )
       
        console.log(localStorage)
      }
    })


    setTimeout(() => {
      if(profileType === "TRADER") {
        this.router.navigateByUrl('dashboard');
      } else if(profileType === 'CAC') {
        this.router.navigateByUrl('cacdashboard');
      } else if(profileType === 'OCO') {
        this.router.navigateByUrl('ocodashboard');
      } else if(profileType === 'DCG') {
        this.router.navigateByUrl('dcgdashboard');
      } else if(profileType === "COMMAND TEAM"){
        this.router.navigateByUrl('signup');
      } else if(profileType === "ZONE TEAM") {
        this.router.navigateByUrl('signup');
      } else if(profileType === "HQ TEAM") {
        this.router.navigateByUrl("signup");
      } else {
        this.router.navigateByUrl('signup');
      }
    }, 4000)
  }
}
