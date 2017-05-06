import { Component, OnInit } from '@angular/core';
import { NativeAuthService } from '../../services/native-auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private nativeAuthService: NativeAuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  // onNativeLogoutClick()
  // calls nativeLogout() from the native auth service and displays success message
  onNativeLogoutClick() {
    this.nativeAuthService.nativeLogout();
    this.flashMessage.show('You have successfully logged out.', {cssClass: 'alert-success'});
    this.router.navigate(['/login']);
    return false;
  }
}
