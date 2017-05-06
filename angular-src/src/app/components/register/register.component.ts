import { Component, OnInit } from '@angular/core';
import { NativeRegisterValidationService } from '../../services/native-reg-validate.service';

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
  // injects the native register service into the component on constuction
  constructor(private validateService: NativeRegisterValidationService ) { }



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
      console.log('Please make sure all fields have valid entries');
      alert('Please make sure all fields have valid entries!');

      return false;
    }
    // checks user register form for valid email
    const invalidEmail = !this.validateService.nativeEmailValidate(user.email);
    if (invalidEmail) {
      console.log('Please enter a valid email');
      alert('Please enter a valid email!');

      return false;
    }
  }



}
