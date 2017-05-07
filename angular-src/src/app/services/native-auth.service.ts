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

// ANGULAR2-JWT
// this is a service we will use to hide and show elements depending on wheather there is a valid JWT
// If the token is valid, tokenNotExpired returns true, otherwise it returns false.
// https://github.com/auth0/angular2-jwt

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class NativeAuthService {



  // CLASS PROPERTIES
  authToken: any;
  user: any;



  // constructor()
  // injects the Http object
  constructor(
    private http: Http,
  ) { }




  // registerUser()
  // makes a POST request to the /register api endpoint
  // returns success or failure on repsonse
  // sends the user object to ./users/register api endpoint
  // the map() method makes the post request an Observable
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


    // NOTE FOR LOCAL DEV comment out for heroku deployment
    // const userObservable = this.http.post('http://localhost:3000/users/register', user, {headers: headers}).map(res => res.json());

    // NOTE FOR HEROKU comment out for local development
    const userObservable = this.http.post('users/register', user, {headers: headers}).map(res => res.json());

    return userObservable;

  }




  // authenticateUser()
  // makes a POST request to the /auth api endpoint
  // returns success and JWT or failure on repsonse
  // sends the user object to ./users/register api endpoint
  // the map() method makes the post request an Observable
  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


    // NOTE FOR LOCAL DEV comment out for heroku deployment
    // const userObservable = this.http.post('http://localhost:3000/users/auth', user, {headers: headers}).map(res => res.json());

    // NOTE FOR HEROKU comment out for local development
    const userObservable = this.http.post('users/auth', user, {headers: headers}).map(res => res.json());

    return userObservable;
  }




  // getProfile()
  // makes a protected/authenticated get request, requires a valid token to access this endpoint
  // sends a valid auth token to the api endpoint
  getProfile() {
    let headers = new Headers();
    this.fetchToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');


    // NOTE FOR LOCAL DEV comment out for heroku deployment
    // const userObservable = this.http.get('http://localhost:3000/users/profile', {headers: headers}).map(res => res.json());

    // NOTE FOR HEROKU comment out for local development
    const userObservable = this.http.get('users/profile', {headers: headers}).map(res => res.json());

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




  // fetchToken()
  // gets user JWT token from localStroage if it exists
  // sets the class property authToken to the token it fetches
  fetchToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }



  // loggedIn()
  // if the token is valid, tokenNotExpired returns true, otherwise it returns false
  // loggedIn() will be used in html to conditionally hide and show elements
  loggedIn() {
    return tokenNotExpired('id_token');
  }




  // nativeLogout()
  // clears localStorage and removes JWT token
  nativeLogout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
