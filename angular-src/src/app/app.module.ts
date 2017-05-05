import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PublicFeedComponent } from './components/public-feed/public-feed.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PopularComponent } from './components/popular/popular.component';
import { SearchComponent } from './components/search/search.component';




// FRONT END ROUTES CONFIG
// routing logic is exported as the <router-outlet> html tag
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'feed', component: PublicFeedComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'popular', component: PopularComponent},
  {path: 'search', component: SearchComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PublicFeedComponent,
    ProfileComponent,
    PopularComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
