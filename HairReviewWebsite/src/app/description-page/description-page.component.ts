import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService} from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-description-page',
  templateUrl: './description-page.component.html',
  styleUrls: ['../app.component.css']
})
export class DescriptionPageComponent{

  ids: string;
  private sub: any;

  post: any = [];

  postname: string;
  postupvote: string;

  test1arr: any = [];
  testingarr: any = [];

  date: string;

  sessionString = sessionStorage.getItem("userid");

  constructor(private route: ActivatedRoute, private postsService: PostsService, private router: Router) {
    console.log(this.route.snapshot.params);
    console.log(this.route.snapshot.data);
   }

  ngOnInit(productid: string) {

    var today = new Date();
    this.date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(this.date);

    this.sub = this.route.params.subscribe(params =>{
      this.ids = params['_id']; //+ converts string 'id' to  number
      console.log(this.ids)

      //retrieving specific description
      productid = this.ids;
      console.log(productid)
      this.postsService.getSpecific(productid).subscribe(posts => {
        this.post = posts;
        this.postname = this.post.ProductName;
        this.postupvote = this.post.ProductUpvote;
        console.log(this.post.ProductName);
      });
      
      this.postsService.getSpecificShampoo(productid).subscribe(posts => {
        this.post = posts;
        this.postname = this.post.ProductName;
        this.postupvote = this.post.ProductUpvote;
        console.log(this.post.ProductName);
      });
      this.postsService.getSpecificOther(productid).subscribe(posts => {
        this.post = posts;
        this.postname = this.post.ProductName;
        this.postupvote = this.post.ProductUpvote;
        console.log(this.post.ProductName);
      });
    })
  };


  addtoFavourites(id: string, prodid: string){
    var grabsessionname = sessionStorage.getItem("userid");
    let arr: Array<string> = []; //array to store id
    let arruser: Array<string> = []; //array to store username
    let arrid: Array<string> = []; //array to store productid
    let arrprod: Array<string> = []; //array to store productid
    console.log("productid " + id);
    console.log("productname " + prodid);
    console.log("username " + grabsessionname);
    if (grabsessionname != null){
      this.postsService.getFavourites().subscribe(posts => {
        this.test1arr = posts;

        for(let enqui of this.test1arr) {
          arr.push(enqui._id);
          arruser.push(enqui.username);
          arrprod.push(enqui.productname);
          arrid.push(enqui.productid);
        }
        console.log(arr);
        console.log(arr.length);
        console.log(grabsessionname);

        if (arr.length == 0 || arr.length == null){
          console.log("it did pass");
          this.postsService.insertFavourites(id,
            prodid, grabsessionname, this.date).subscribe(results => {
            window.alert("This product has been added to your favourites!");
            location.reload();
          });
        }
        else if (arr.length != 0 || arr.length != null){
          console.log("it didn't pass");

          for (var i = 0 ; arr.length; i++){
              if (grabsessionname == arruser[i] && id == arrid[i]){
                console.log(arruser[i]);
                console.log(arrprod[i]);
                console.log(arrid[i]);
                window.alert("This product has already been added to your favourites!");
                return console.log("access denied");
              }
              if (i == arr.length)
              {
                console.log(id);
                console.log(prodid);
                console.log(grabsessionname);
                this.postsService.insertFavourites(id,
                  prodid, grabsessionname, this.date).subscribe(results => {
                  window.alert("This product is now added to your favourites!");
                  location.reload();
                });
                return console.log("added to favourites");
              }
              console.log("isLoop");
          }
        }
      });
    }
    else{
      this.router.navigateByUrl('/login');
      console.log("You're not logged in!");
    }
  }

  //upvote and downvote post
  upvoteClick1(id: string, oldquote: string){
    if (this.sessionString != null){
      this.postsService.increaseProduct(id,
        parseInt(oldquote)+1).subscribe(results => {
          location.reload();
      });
      this.postsService.increaseShampoo(id,
        parseInt(oldquote)+1).subscribe(results => {
          location.reload();
      });
      this.postsService.increaseOthers(id,
        parseInt(oldquote)+1).subscribe(results => {
          location.reload();
      });
    }
    else{
      console.log("You're not logged in");
      window.alert("You're not logged in!");
    }
  }

  downvoteClick1(id: string, oldquote: string){
    if (this.sessionString != null){
      this.postsService.decreaseProduct(id,
        parseInt(oldquote)-1).subscribe(results => {
          location.reload();
      });
      this.postsService.decreaseShampoo(id,
        parseInt(oldquote)-1).subscribe(results => {
          location.reload();
      });
      this.postsService.decreaseOthers(id,
        parseInt(oldquote)-1).subscribe(results => {
          location.reload();
      });
    }
    else{
      console.log("You're not logged in");
      window.alert("You're not logged in!");
    }
  }


}
