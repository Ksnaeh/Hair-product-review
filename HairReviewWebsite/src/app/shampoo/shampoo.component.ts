 import { Component, OnInit } from '@angular/core';
import { PostsService} from '../posts.service';

@Component({
  selector: 'app-shampoo',
  templateUrl: './shampoo.component.html',
  styleUrls: ['../app.component.css']
})
export class ShampooComponent implements OnInit {
  
  sessionClass= sessionStorage.getItem("userid");
  posts: any = [];
  public loadedGoalList: any[];

  constructor(private postsService: PostsService) { 
    this.postsService.getAllShampoo().subscribe(posts => {
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

  filterList2(evt) {
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

  upvoteClick(id: string, oldquote: string){
    if (this.sessionClass != null){
      this.postsService.increaseShampoo(id,
        parseInt(oldquote)+1).subscribe(results => {
          location.reload();
      });
    }
    else{
      console.log("You're not logged in");
      location.reload();
    }
  }

  downvoteClick(id: string, oldquote: string){
    if (this.sessionClass != null){
      this.postsService.decreaseShampoo(id,
        parseInt(oldquote)-1).subscribe(results => {
          location.reload();
      });
    }
    else{
      console.log("You're not logged in");
      location.reload();
    }
  }

}
