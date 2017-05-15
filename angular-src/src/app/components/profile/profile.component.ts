import { Component, OnInit } from '@angular/core';
import { NativeAuthService } from '../../services/native-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})




export class ProfileComponent implements OnInit {



  // ClASS PROPERTIES
  user: Object;




  // constructor()
  // injects front end router and native auth service
  constructor(
    private router: Router,
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
