import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService} from '../posts.service';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['../app.component.css']
})
export class FavouritesComponent implements OnInit {

  ids: string;
  private sub: any;

  postaid: any = []; //store favourites inside

  icecream: any = []; //store product details inside

  fav_array: any = []; //store matched favourites inside
  favstring: string;


  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {

    let arr: Array<string> = []; //array to store id
    let arruser: Array<string> = []; //array to store username
    let arrdesc: Array<string> = []; //array to store productname
    let arrid: Array<string> = []; //array to store productid
    let arrdate: Array<string> = []; //array to store added date
    
    this.postsService.getFavourites().subscribe(posts => {
      this.postaid = posts;

      for(let enqui of this.postaid) {
        arr.push(enqui._id);
        arrid.push(enqui.productid);
        arrdesc.push(enqui.productname);
        arruser.push(enqui.username);
        arrdate.push(enqui.addedDate);
      }
      console.log(arr);
      
      this.sub = this.route.params.subscribe(params =>{
        this.ids = sessionStorage.getItem("userid");
        console.log(this.ids);

        for (var i = 0 ; arr.length; i++){
            if (this.ids == arruser[i]){
              this.fav_array.push(({"favouriteID": arr[i], "productID": arrid[i], "productName": arrdesc[i], "username": arruser[i], "addDate": arrdate[i]}));
              console.log(arr[i]);
              console.log(this.postaid);
              console.log(this.fav_array);
              this.favstring = "match my fookin arse";
              console.log(this.favstring);
            }
            if (i == arr.length)
            {
              return console.log("no favourites inside");
            }
        }
      });
    });
  }

  deleteFav(id: string){
    var r = confirm("This product will be removed from your favourites.");
    if (r == true){
      this.postsService.deleteFavourites(id).subscribe(results => {
        window.alert("Product is now removed from your favourites.");
        location.reload();
      });
    }
  }

}
