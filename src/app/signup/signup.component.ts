import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm;
  emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  registerMessage = '';
  isExist:boolean;
  commands;


  constructor(private formBuilder:FormBuilder, private router:Router, private signupService:SignupService) {
      this.signupForm = this.formBuilder.group({
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern(this.emailRegex), Validators.required])],
       
        rcNumber: ['', Validators.compose([Validators.required])],
        tinNumber: ['', Validators.compose([Validators.required])],
        repeat: ['', Validators.compose([Validators.required])],
        username: ['', Validators.compose([Validators.required])],
        firstName: ['', Validators.compose([Validators.required])],
        lastName: ['', Validators.compose([Validators.required])],
        phone: ['', Validators.compose([Validators.required])],
        command: ['', Validators.compose([Validators.required])],
        businessDescription: ['', Validators.compose([Validators.required])],
        businessPurpose: ['', Validators.compose([Validators.required])],
        CompanyName: ['', Validators.compose([Validators.required])],
        location: ['', Validators.compose([Validators.required])],
      })
   }

  ngOnInit() {
    this.getCommands();
  }

  signup() {
    console.log("This is the signup method");
    let isValid = false;
    let fb = this.signupForm.value;
    console.log(fb);

    if(this.signupForm.valid) {
      isValid = true;
      console.log("Form is valid")
    } else {
      this.isExist = true;
      this.registerMessage = "Form not completely filled.";
    }

    let password = fb.password.toString();
    let repeat = fb.repeat.toString();
    console.log(password + ' ' + repeat);
    if(password !== repeat) {

      this.isExist = true;
      this.registerMessage = "Password mismatch. Please enter correct password";
      return;
    } 

    if(isValid) { 

      localStorage.setItem('email', fb.email);
      localStorage.setItem('userId', fb.username);
      localStorage.setItem('commandId', fb.command);
  
      let userData = {}
      userData['email'] = fb.email;
      userData['userId'] = fb.username;
      

      this.signupService.findUserInfoById().subscribe((response) => {
        console.log(response);
        let res = response.json()
  
        if(res.items.length == 0) {
          let isAdmin = '0';
          let user = {}
          user['userId'] = fb.username;
          user['firstName'] = fb.firstName;
          user['lastName'] = fb.lastName;
          user['email'] = fb.email;
          user['phone'] = fb.phone;
          user['password'] = fb.password;
          user['profileType'] = "TRADER";
          user['commandId'] = fb.command;
          console.log(user);
  
          this.signupService.registerUser(user).subscribe((response) => {
            console.log(response);
      
            if(response.statusText === "OK") {
              let userInfo = {};
      
              userInfo['companyName'] = fb.CompanyName;
              userInfo['descriptionOfBusiness'] = fb.businessDescription;
              userInfo['purposeOfBusiness'] = fb.businessPurpose;
              userInfo['rcNumber'] = fb.rcNumber;
              userInfo['tinNumber'] = fb.tinNumber;
              userInfo['userId']= fb.username;
              userInfo['location'] = fb.location;
              userInfo['phoneNumber'] = fb.phone;
              userInfo['isAdmin'] = 0;
              console.log(userInfo);
      
            this.signupService.registerUserInfo(userInfo).subscribe(( response) => {
              console.log(response);
              if(response.statusText=== "OK") {
                this.signupService.findUserByEmail().subscribe((response) => {
                  let res = response.json();
                  console.log(res);
                  let user = res.items;
                  if(user.length > 0) {
                    this.router.navigateByUrl('signin');
                  } else {
                    this.clearForm();
                    this.isExist = true;
                    this.registerMessage = "User registration could not be completed. Please contact System Administrator";
                  }
                }, (error) => {
                  console.log(error);
                })
              }
            })
            } else {
              this.clearForm();
              this.registerMessage = "Form not properly filled. Please fill the form again"
            }
          })
  
        } else if(res.items == undefined) {
          this.isExist = true;
          this.registerMessage = "Error validating user. Please contact system Administrator";
        } else if(res.items.length > 0) {
          this.isExist = true;
          this.registerMessage = "Account already exists. Registration could not be completed";
        } else {
          this.router.navigateByUrl('signup');
        }
      }, (error) => {
        let err = error.json()
        this.registerMessage = err.statusText;
      })
    } else {
      this.isExist = true;
      this.registerMessage = "Form not correctly filled. Please check to make sure all fields are filled.";
    }
    
   

    /*this.signupService.findUserById(userData).subscribe((response) => {
      console.log(response);
    }) */
  }

/*
   hashPassword(data) {
    let password = data.password.toString();
    let repeat = data.repeat.toString();
    if(password === repeat) {
      var mykey = createCipher('aes-128-cbc', localStorage.getItem('email'));
      var mystr = mykey.update(password, 'utf8', 'hex');
      mystr += mykey.final('hex');
      var result = mystr;
      console.log(result);
      return result;
    } else {
      return "error";
    }
   } */

   getCommands() {
     this.signupService.getAllCommands().subscribe((response) => {
       let res = response.json();
       console.log(res.items);
       this.commands = res.items;
     })
   }

  clearForm() {
    this.signupForm.controls.firstName.setValue('');
    this.signupForm.controls.lastName.setValue('');
    this.signupForm.controls.username.setValue('');
    this.signupForm.controls.rcNumber.setValue('');
    this.signupForm.controls.tinNumber.setValue('');
    this.signupForm.controls.CompanyName.setValue('');
    this.signupForm.controls.command.setValue('');
    this.signupForm.controls.businessDescription.setValue();
    this.signupForm.controls.PurposeOfBusiness.setValue('');
    this.signupForm.controls.password.setValue('');
    this.signupForm.controls.repeat.setValue('');
  }

}
