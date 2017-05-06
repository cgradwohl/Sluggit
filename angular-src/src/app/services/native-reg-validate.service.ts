import { Injectable } from '@angular/core';

@Injectable()
export class NativeRegisterValidationService {

  constructor() { }


  // nativeRegFormValidate()
  // validates all register form fields are defined
  nativeRegisterFormValidate(user) {
    if ( user.name === undefined ||
      user.username === undefined ||
      user.email === undefined ||
      user.password === undefined ) {
        return false;

    } else {
        return true;
    };
  }


  // nativeEmailValidate()
  // ensures the user entered a valid email address
  // borrowed from --> http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
  nativeEmailValidate(email) {

    const regExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // returns true if valid email and returns false otherwise
    return regExpression.test(email);
  }


}
