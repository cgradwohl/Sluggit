// NOTES

// OBSERVABLES
// javascript has a more general array object called Collections.
// collection objects like Map, Set, and WeakMap store values and objects( think fancy arrays or hashmaps)
// this auth service is a perfect situation to use a special COllection object called Observables
// An Observable is a collection that arrives over time.
// A representation of any set of values over any amount of time. This the most basic building block of RxJS.
// see http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html for more info.

// RXJS OPERATOR/MAP
// Like Array.prototype.map(), it passes each source value through a transformation function to get corresponding output values.
// see http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-map for more info


import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import 'rxjs/add/operator/map';

@Injectable()
export class NativeAuthService {



  // CLASS PROPERTIES
  authToken: any;
  user: any;



  // constructor()
  // injects the Http object
  constructor(
    private http: Http,
    private localStorageService: LocalStorageService
  ) { }



  // registerUser()
  // makes a POST request to the /register api endpoint
  // returns success or failure on repsonse
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // sends the user object to ./users/register api endpoint
    // the map() method makes the post request an Observable
    const userObservable = this.http.post('http://localhost:3000/users/register', user, {headers: headers}).map(res => res.json());

    return userObservable;

  }

  // authenticateUser()
  // makes a POST request to the /auth api endpoint
  // returns success and JWT or failure on repsonse
  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // sends the user object to ./users/register api endpoint
    // the map() method makes the post request an Observable
    const userObservable = this.http.post('http://localhost:3000/users/auth', user, {headers: headers}).map(res => res.json());

    return userObservable;
  }

  // storeNativeUserData()
  // stores the user data in local storage so that the browser remembers the user login info.
  storeNativeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  nativeLogout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
