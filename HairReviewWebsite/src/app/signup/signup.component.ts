import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../app.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  test1arr: any = [];

  k: number;

  // constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.myForm = this.fb.group ({
      name: ['', Validators.required],
      password: ['', [Validators.required,
        Validators.minLength(8)]],
      confirmpassword: '',
      email: ['', Validators.required]
    });
  }

  ngOnInit() { 
    this.k = 0;
  }

  onSubmit() {
    var usernaname = this.myForm.value.name;
    var passpassword = this.myForm.value.password;
    var emmail =  this.myForm.value.email;
    let arr: Array<string> = []; //array to store in usernames

    if (this.myForm.value.confirmpassword == passpassword){

        this.authService.getAllUser().subscribe(posts => {
          this.test1arr = posts;

          for(let enqui of this.test1arr) {
            arr.push(enqui.username);
            
          }
          console.log(arr);
          
          console.log(usernaname);
          console.log(passpassword);
          console.log(emmail);


          for (var i = 0 ; arr.length; i++){
              if (usernaname == arr[i]){
                console.log("user exists");
                this.k = 1;
                break;
                //return console.log(this.k);
              }
              if (i == arr.length){
                this.k = 0;
                break;
                //return console.log(this.k);
              } 
          }
          console.log("show this shit: " + this.k);
          if (this.k == 0){
            this.authService.regUser(usernaname,
            passpassword, emmail).subscribe();
            window.alert("You account has been successfully created, you'll now be redirected to the login page.");
            this.router.navigateByUrl('/login');
          }
          else if (this.k == 0){
            window.alert("There is an existing user with that username!");
          }
        });
    }
    else{
      window.alert("Passwords did not match!");
      this.myForm.reset();
    }
  }
    

}
