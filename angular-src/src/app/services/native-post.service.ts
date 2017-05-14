import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class NativePostService {

  post: any;


  constructor(
    private http: Http,
  ) { }

  addPost(post) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


    // NOTE FOR LOCAL DEV comment out for heroku deployment
    const postObservable = this.http.post('http://localhost:3000/posts/add', post, {headers: headers}).map(res => res.json());

    // NOTE FOR HEROKU comment out for local development
    // const postObservable = this.http.post('posts/add', post, {headers: headers}).map(res => res.json());

    return postObservable;

  }

}
