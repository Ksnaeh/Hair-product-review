import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescriptionPageComponent } from './description-page/description-page.component';
import { OtherspageComponent } from './otherspage/otherspage.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShampooComponent } from './shampoo/shampoo.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { AddCommentsComponent } from './add-comments/add-comments.component';
import { ChangepasswordpageComponent } from './changepasswordpage/changepasswordpage.component';
import { LogoutComponent } from './logout/logout.component';
import { FavouritesComponent } from './favourites/favourites.component';

const appRoutes: Routes = [
{ path: 'home', component: HomeComponent },
// redirect to home page on load
 { path: '', component: HomeComponent, pathMatch: 'full'},

  { path: 'details/:_id', component: DescriptionPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'shampoo', component: ShampooComponent},
  { path: 'others', component: OtherspageComponent},
  { path: 'comments/:ProductId', component: CommentSectionComponent},
  { path: 'reguser', component: SignupComponent},

  { path: 'addcomment/:ProductId', component: AddCommentsComponent, canActivate: [AuthGuard], data:
  {permission: {only: ["user"]}}},
  

  { path: 'changepassword', component: ChangepasswordpageComponent},

  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], data:
  {permission: {only: ["user"]}}},
  { path: 'logout', component: LogoutComponent},

  { path:'favourites', component:FavouritesComponent}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);