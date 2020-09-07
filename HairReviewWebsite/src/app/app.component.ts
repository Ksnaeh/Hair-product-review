import { Component } from '@angular/core';
import { PostsService} from './posts.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts: any = [];
  sessionStage: string

  constructor(private postsService: PostsService, private router: Router){
    //get posts from the API itself
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnInit() {
    this.sessionStage = sessionStorage.getItem("userid");
    if (this.sessionStage == null){
      document.getElementById("hidemyass").style.visibility = 'hidden';
      document.getElementById("hideLogout").style.visibility = 'hidden';
      document.getElementById("hideLogin").style.visibility = 'visible';
      document.getElementById("hideSignUp").style.visibility = 'visible';
      
    } 
    else{
      document.getElementById("hidemyass").style.visibility = 'visible';
      document.getElementById("hideLogout").style.visibility = 'visible';
      document.getElementById("hideLogin").remove();
      document.getElementById("hideSignUp").remove();
    } 
  }


    
}
