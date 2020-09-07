import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  results: any = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group ({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });   
  }

  onSubmit() {
    this.authService.authUser(this.myForm.value.name, this.myForm.value.password).subscribe(data => {
      this.results = data;

      if (this.results[0].auth)
      {
        this.authService.setSecureToken(this.myForm.value.name);
        window.alert("Welcome back " + this.myForm.value.name + "!");
        this.authService.setUserRole(this.results[0].role);
        this.authService.setUserID(this.myForm.value.name);
        this.router.navigate(['/profile'])
        .then(() => {
          window.location.reload();
        });
      }
      else{
        window.alert("Wrong username / password!");
      }
    });
  }

}
