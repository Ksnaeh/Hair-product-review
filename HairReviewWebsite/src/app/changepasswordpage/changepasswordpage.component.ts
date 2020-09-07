import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-changepasswordpage',
  templateUrl: './changepasswordpage.component.html',
  styleUrls: ['../app.component.css']
})
export class ChangepasswordpageComponent implements OnInit {

  editForm: FormGroup;

  constructor(private fb: FormBuilder,private authService: AuthService, private router: Router) {
    this.editForm = this.fb.group ({
      password: '',
      matchpassword: '',
    });
   }
  
  ngOnInit() {
  }

  onSubmit() {
    var getusername = sessionStorage.getItem("userid");
    if (this.editForm.value.password == null || this.editForm.value.password == ""){
      window.alert("Missing fields!");
    }
    else{
      if (this.editForm.value.password == this.editForm.value.matchpassword){
        var t = window.confirm("Are you sure you want to change your password?");
        if (t == true){
          this.authService.updatePassword(getusername,
          this.editForm.value.matchpassword).subscribe();
          window.alert("Success! Your password has been updated!");
          this.router.navigateByUrl('/profile');
        }
        else{
          console.log("nothing has been changed");
        }
      }
      else{
        window.alert("The entered passwords didn't match!");
        console.log("the entered passwords did not match");
      }
    }
  }

  returnPage(){
    window.history.back();
  }

}
