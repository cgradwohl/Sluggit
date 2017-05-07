import { Component, OnInit } from '@angular/core';
import { NativeRegisterValidationService } from '../../services/native-reg-validate.service';
import { NativeAuthService } from '../../services/native-auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {


  // CLASS PROPERTIES
  name: String;
  username: String;
  email: String;
  password: String;




  // constructor()
  // injects the native register service into the component on constuction
  constructor(
    private nativeValidateService: NativeRegisterValidationService,
    private nativeAuthService: NativeAuthService,
    private flashMsgService: FlashMessagesService,
    private router: Router
  ) { }



  ngOnInit() { }



  // onNativeRegisterSubmit()
  // creates user object from user input, validates user form input, and registers user
  onNativeRegisterSubmit() {


    // USER OBJECT
    // grabs user data from register form using two way data binding
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    };



    // FORM VALIDATION
    // checks user register form for missing entries
    const missingEntry = !this.nativeValidateService.nativeRegisterFormValidate(user);
    if (missingEntry) {
      this.flashMsgService.show('Please make sure all fields have valid entries!', { cssClass: 'alert-danger' });

      return false;
    }

    const invalidEmail = !this.nativeValidateService.nativeEmailValidate(user.email);
    if (invalidEmail) {
      this.flashMsgService.show('Please enter a valid email!', { cssClass: 'alert-danger' });

      return false;
    }



    // REGISTER USER
    // calls registerUser() which makes post request to user/register api endpoint
    this.nativeAuthService.registerUser(user).subscribe(data => {

      if (data.success) {
        this.flashMsgService.show('Success!', { cssClass: 'alert-success' });
        this.router.navigate(['/login']);

      } else {
        this.flashMsgService.show('Register failed! Please try again!', { cssClass: 'alert-danger' });
        this.router.navigate(['/register']);
      }
    });


  }
}
