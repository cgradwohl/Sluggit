import { Component, OnInit } from '@angular/core';
import { NativeAuthService } from '../../services/native-auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})




export class ProfileComponent implements OnInit {



  // ClASS PROPERTIES
  user: Object;


  // constructor()
  // injects native auth service
  constructor(
    private nativeAuthService: NativeAuthService
  ) { }


  // ngOnInit()
  // initializes the component with user token data
  ngOnInit() {
    this.nativeAuthService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
