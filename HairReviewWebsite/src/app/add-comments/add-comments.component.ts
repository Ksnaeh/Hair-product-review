import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DatePipe]
})
export class AddCommentsComponent implements OnInit {
  ids: string;
  private sub: any;

  myForm: FormGroup;

  currentDate: string;

  userid = sessionStorage.getItem("userid");

  date: string;


  constructor(private dataepipe: DatePipe, private postsService: PostsService, private fb: FormBuilder, private route: ActivatedRoute,
    private authServ: AuthService) { 
  }

  ngOnInit() {
    var today = new Date();
    this.date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(this.date);

    console.log(this.userid);

    this.sub = this.route.params.subscribe(params =>{
      this.ids = params['ProductId']; //+ converts string 'id' to  number
      console.log(this.ids);
      this.myForm = this.fb.group({

        commentdesc: '',
      });
    })
  }

  onSubmit(){
    this.postsService.insertComment(this.ids,
   this.userid, this.myForm.value.commentdesc, this.date).subscribe(results => {
    window.alert("Your comment has been posted!");
    window.history.back();
   });
 }

 goBack(){
   window.history.back();
 }

}
