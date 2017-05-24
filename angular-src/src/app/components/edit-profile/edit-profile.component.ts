import { Component, OnInit } from '@angular/core';
import { NativeAuthService } from '../../services/native-auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})


export class EditProfileComponent implements OnInit {

  // ClASS PROPERTIES
  name: String;
  username: String;
  email: String;
  password: String;
  company: String;
  location: String;
  role: String;
  age: Number;
  aboutMe: String;


  // constructor()
  // injects front end router and native auth service
  constructor(
    private router: Router,
    private nativeAuthService: NativeAuthService,
    private flashMessage: FlashMessagesService
  ) { }

  // ngOnInit()
  // initializes the component with user token data
  ngOnInit() {

  }

  //onNativeEditProfileSubmit()
  onNativeEditProfileSubmit() {

    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      company: this.company,
      location: this.location,
      role: this.role,
      age: this.age,
      aboutMe: this.aboutMe
    };

    this.nativeAuthService.updateUser(user).subscribe( data => {
      if (data.success) {
        this.router.navigate(['/profile']);
        this.flashMessage.show('Successful update!', { cssClass: 'alert-success' });

      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
      }
    });
  }

}