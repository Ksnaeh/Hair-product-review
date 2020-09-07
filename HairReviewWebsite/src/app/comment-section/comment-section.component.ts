import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService} from '../posts.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['../app.component.css']
})
export class CommentSectionComponent {

  ids: string;
  private sub: any;

  post: any = [];

  test: any = []; //store matched comments inside
  commenttext: string;
  hehexd = sessionStorage.getItem("userid");

  constructor(private route: ActivatedRoute, private postsService: PostsService) {
  }

  ngOnInit(){
    
    let arrid: Array<string> = []; //array to store product id to match
    let arr: Array<string> = []; //array to store product id to match
    let arruser: Array<string> = []; //array to store usernames
    let arrdesc: Array<string> = []; //array to store comments
    let arrdate: Array<string> = []; //array to store comment posted date

    this.postsService.getAllCommentsForProduct().subscribe(posts => {
      this.post = posts;

      for(let enqui of this.post) {
        arrid.push(enqui._id);
        arr.push(enqui.ProductId);
        arruser.push(enqui.Username);
        arrdesc.push(enqui.CommentDesc);
        arrdate.push(enqui.CommentDate);
      }
      console.log(arr);
      
      this.sub = this.route.params.subscribe(params =>{
        this.ids = params['ProductId'];
        console.log(this.ids);

        for (var i = 0 ; arr.length; i++){
            if (this.ids == arr[i]){
              this.test.push(({"ID": arrid[i],"ProductID": arr[i], "CommentDato": arrdate[i], "CommentBeskriv":arrdesc[i],"CommentBruk": arruser[i]}));
              // this.test.push([arr[i], arrdate[i], arrdesc[i], arruser[i]]);
              console.log(arr[i]);
              console.log(this.post);
              console.log(this.test);
              this.commenttext = "match my arse";
              console.log(this.commenttext);
            }
            if (i == arr.length)
            {
              return console.log("no avail comments");
            }
        }
      });
    });
  }

  deleteCom(id: string){
    var r = confirm("Are you sure you want to delete this comment?")
    if (r == true){
      this.postsService.deleteComment(id).subscribe(results => {
        location.reload();
      });
    }
  }
  
  returnez(){
    window.history.back();
  }
}
