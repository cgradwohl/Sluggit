import { Component, OnInit } from '@angular/core';
import { NativeAuthService } from '../../services/native-auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private nativeAuthService: NativeAuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }



  // onNativeLoginSubmit()
  // grabs user data from login form and calls authenticateUser() using observables
  // stores user data in local storage on success
  onNativeLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    this.nativeAuthService.authenticateUser(user).subscribe( data => {
      if (data.success) {
        this.nativeAuthService.storeNativeUserData(data.token, data.user);
        this.flashMessage.show('Successful login!', { cssClass: 'alert-success' });
        this.router.navigate(['/feed']);

      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
        this.router.navigate(['/login']);
      }
    });
  }

}
