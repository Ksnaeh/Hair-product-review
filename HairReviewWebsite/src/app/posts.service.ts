import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getAllPosts(){
    return this.http.get<any[]> ('./api/hairgel');
  }
  getSpecific(productid: string){
    return this.http.get<any[]>('./api/hairgels/' + productid);
  }
  getAllShampoo(): Observable<any[]>{
    return this.http.get<any[]> ('./api/hairshampoo');
  }
  getSpecificShampoo(productid: string){
    return this.http.get<any[]>('./api/hairshampoo/' + productid);
  }
  
  getAllOthers(): Observable<any[]>{
    return this.http.get<any[]> ('./api/hairothers');
  }
  getSpecificOther(productid: string){
    return this.http.get<any[]>('./api/hairothers/' + productid);
  }


  //get comments
  getSpecificComment(productid: string): Observable<any[]>{
    return this.http.get<any[]>('./api/quotes/' + productid);
  }
  getAllCommentsForProduct(): Observable<any[]>{
    return this.http.get<any[]>('./api/quote/');
  }

  insertComment (productid: string, username: string, commentdesc: string, gdate: string) {
    return this.http.post<any[]>('./api/quoteinsert/', {"ProductId": productid, "Username": username, "CommentDesc": commentdesc, 
    "CommentDate": gdate});
  }
  
  deleteComment(id: string) {
    return this.http.delete<any[]>('./api/quote/' + id);
  }


  //upvoting products
  increaseProduct(id: string, newquote: number) {
    return this.http.put<any[]>('./api/upvoteProduct/' + id, {'ProductUpvote': newquote});
  }
  increaseShampoo(id: string, newquote: number) {
    return this.http.put<any[]>('./api/upvoteShampoo/' + id, {'ProductUpvote': newquote});
  }
  increaseOthers(id: string, newquote: number) {
    return this.http.put<any[]>('./api/upvoteOthers/' + id, {'ProductUpvote': newquote});
  }

  //downvoting products
  decreaseProduct(id: string, newquote: number) {
    return this.http.put<any[]>('./api/downvoteProduct/' + id, {'ProductUpvote': newquote});
  }
  decreaseShampoo(id: string, newquote: number) {
    return this.http.put<any[]>('./api/downvoteShampoo/' + id, {'ProductUpvote': newquote});
  }
  decreaseOthers(id: string, newquote: number) {
    return this.http.put<any[]>('./api/downvoteOthers/' + id, {'ProductUpvote': newquote});
  }

  //'favourites' functions
  getFavourites(): Observable<any[]>{
    return this.http.get<any[]>('./api/favourites/');
  }
  insertFavourites (productid: string, productname: string, username: string, addedDate) {
    return this.http.post<any[]>('./api/favouritesadd/', {"productid": productid, "productname": productname,"username": username, "addedDate": addedDate});
  }
  deleteFavourites(id: string) {
    return this.http.delete<any[]>('./api/favourites/' + id);
  }
}
