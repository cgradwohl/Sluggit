// NG MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

// COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PublicFeedComponent } from './components/public-feed/public-feed.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PopularComponent } from './components/popular/popular.component';
import { SearchComponent } from './components/search/search.component';


// SERVICES
import { NativeRegisterValidationService } from './services/native-reg-validate.service';
import { NativeAuthService } from './services/native-auth.service';
import { NativeAuthGuardService } from './services/guards/native-auth-guard.service';
import { AddPostComponent } from './components/add-post/add-post.component';


// ROUTER CONFIG
// routing logic is exported as the <router-outlet> html tag
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'feed', component: PublicFeedComponent, canActivate: [NativeAuthGuardService]},
  {path: 'profile', component: ProfileComponent, canActivate: [NativeAuthGuardService]},
  {path: 'popular', component: PopularComponent, canActivate: [NativeAuthGuardService]},
  {path: 'search', component: SearchComponent},
  {path: 'addpost', component: AddPostComponent}
];


// NG MODULE CONFIG
// defines the set of injectable objects that are available in the injector of this module.
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
    SearchComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [
    NativeRegisterValidationService,
    NativeAuthService,
    NativeAuthGuardService
  ],
  bootstrap: [AppComponent]
})


// EXPORT CLASS
export class AppModule { }
