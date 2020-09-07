import { Component, OnInit } from '@angular/core';
import { PostsService} from '../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})
export class HomeComponent implements OnInit {
  title = 'StyloMilo Reviews';
  posts: any = [];

  public loadedGoalList: any[];
  test: any = []; //store matched comments inside

  sessionClass = sessionStorage.getItem("userid");
  
  constructor(private postsService: PostsService) { 
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      this.loadedGoalList = posts;
    });
  }

  ngOnInit() {
    console.log(this.sessionClass);
  }

  //search functions
  initializeItems(): void {
    this.posts = this.loadedGoalList;
  }

  filterList(evt) {
    this.initializeItems();
  
    const searchTerm = evt.srcElement.value;
  
    if (!searchTerm) {
      return;
    }
  
    this.posts = this.posts.filter(currentGoal => {
      if (currentGoal.ProductName && searchTerm) {
        if (currentGoal.ProductName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  //upvote and downvote post
  upvoteClick(id: string, oldquote: string){
    if (this.sessionClass != null){
      this.postsService.increaseProduct(id,
        parseInt(oldquote)+1).subscribe(results => {
          location.reload();
      });
    }
    else{
      console.log("You're not logged in");
    }
  }

  downvoteClick(id: string, oldquote: string){
    if (this.sessionClass != null){
    this.postsService.decreaseProduct(id,
      parseInt(oldquote)-1).subscribe(results => {
        location.reload();
    });
    }
    else{
      console.log("You're not logged in");
    }
  }

  categoryEvent(catevent: any){
    console.log(catevent);
  }

}
