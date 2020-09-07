import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  regUser(username: string, pw: string, em: string) {
    return this.http.post<any[]>('./api/reguser/', {'username': username,
   'password': pw, 'email': em });
  }
   
  authUser(username: string, pw: string) {
    return this.http.post<any[]>('./api/authuser/', {'username': username,
   'password': pw});
  }

  getUser(username: string) {
    return this.http.get<any[]>('./api/getuser111/' +  username);
  }

  getAllUser() {
    return this.http.get<any[]>('./api/getuser');
  }

  updatePassword(username: string, password: string) {
    return this.http.put<any[]>('./api/updatepassword/', {'username': username, 'password': password});
  }


  setSecureToken(secure_token: string) {
    sessionStorage.setItem("LoggedIn", secure_token)
  }
   
  getSecureToken() {
    return sessionStorage .getItem("LoggedIn")
  }

  setUserRole(role: string) {
    sessionStorage .setItem("UserRole", role);
    }
  
  setUserID(id: string) {
    sessionStorage .setItem("userid", id);
  }
   
  getUserRole() {
    return sessionStorage .getItem("UserRole")
  }

  getUserID() {
    return sessionStorage .getItem("userid");
  }

  logout() {
    sessionStorage.removeItem("LoggedIn");
    sessionStorage.removeItem("UserRole");
    sessionStorage.removeItem("userid");
  }

  isLoggedIn() {
    return this.getSecureToken() !== null;
  }

  isUser() {
    return (this.getUserRole() == "user");
  }
   
   
}
