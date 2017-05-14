import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class NativePostService {

  // CLASS PROPERTIES
  post: any;


  // constructor()
  // injects the Http object
  constructor(
    private http: Http,
  ) { }



  // addPost()
  // makes a POST request to the /register api endpoint
  // returns success or failure on response
  // sends the post object to ./users/register api endpoint
  // the map() method makes the post request an Observable

  addPost(post) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


    // NOTE FOR LOCAL DEV comment out for heroku deployment
    const postObservable = this.http.post('http://localhost:3000/posts/add', post, {headers: headers}).map(res => res.json());

    // NOTE FOR HEROKU comment out for local development
    // const postObservable = this.http.post('posts/add', post, {headers: headers}).map(res => res.json());

    return postObservable;

  }
  getPost() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // NOTE FOR LOCAL DEV comment out for heroku deployment
    const postObservable = this.http.get('http://localhost:3000/posts/add', {headers: headers}).map(res => res.json());

    // NOTE FOR HEROKU comment out for local development
    // const postObservable = this.http.post('posts/add', post, {headers: headers}).map(res => res.json());

  }

}
