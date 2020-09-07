import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ShampooComponent } from './shampoo/shampoo.component';
import { OtherspageComponent } from './otherspage/otherspage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { ChangepasswordpageComponent } from './changepasswordpage/changepasswordpage.component';
import { PostsService} from './posts.service';
import { DescriptionPageComponent } from './description-page/description-page.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AddCommentsComponent } from './add-comments/add-comments.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ShampooComponent,
    OtherspageComponent,
    LoginComponent,
    SignupComponent,
    FavouritesComponent,
    ProfileComponent,
    LogoutComponent,
    ChangepasswordpageComponent,
    DescriptionPageComponent,
    HomeComponent,
    CommentSectionComponent,
    AddCommentsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [PostsService, AuthService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
