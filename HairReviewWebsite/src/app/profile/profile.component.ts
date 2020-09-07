import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../app.component.css']
})
export class ProfileComponent implements OnInit {


  userarr: any = [];
  spelar: string;

  constructor( private authService: AuthService, private router: Router) { 
  }

  ngOnInit() {
    var username = sessionStorage.getItem("userid");
    this.spelar = username;
    this.authService.getUser(username).subscribe(data =>
      {
        this.userarr = data;
        console.log(this.userarr._id);
        console.log(this.userarr.username);
        console.log(username);
      })
  }

}
