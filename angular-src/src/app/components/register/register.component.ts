import { Component, OnInit } from '@angular/core';
import { NativeRegisterValidationService } from '../../services/native-reg-validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  // REGISTER FORM PROPERTIES
  name: String;
  username: String;
  email: String;
  password: String;




  // constructor()
  // injects the native register service, and  into the component on constuction
  constructor(private validateService: NativeRegisterValidationService, private flashMsgService: FlashMessagesService ) { }



  ngOnInit() { }



  // onNativeRegisterSubmit()
  // creates user object from user input and validates user form input
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
    const missingEntry = !this.validateService.nativeRegisterFormValidate(user);
    if (missingEntry) {
      this.flashMsgService.show('Please make sure all fields have valid entries!', { cssClass: 'alert-danger' });

      return false;
    }
    // checks user register form for valid email
    const invalidEmail = !this.validateService.nativeEmailValidate(user.email);
    if (invalidEmail) {
      this.flashMsgService.show('Please enter a valid email!', { cssClass: 'alert-danger' });

      return false;
    }
    // shows success msg
    const validForm = this.validateService.nativeRegisterFormValidate(user);
    const validEmail = this.validateService.nativeEmailValidate(user.email);
    if (validForm && validEmail) {
      this.flashMsgService.show('Success!', { cssClass: 'alert-success' });
    }
  }



}
