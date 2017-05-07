// use this as an example of a custom Injectable service
// this is a simple service that guards routes against unauthenticated users
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { NativeAuthService } from '../native-auth.service';




@Injectable()



export class NativeAuthGuardService implements CanActivate {
  constructor(
    private nativeAuthService: NativeAuthService,
    private router: Router
  ) {}

  canActivate() {
    if (this.nativeAuthService.loggedIn()) {
      return true;

    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }



}
