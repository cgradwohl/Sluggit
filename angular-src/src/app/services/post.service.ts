import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {


  post: any;

  // constructor()
  // injects the Http object
  constructor(
    private http: Http,
  ) { }


  getPost() {
    const headers = new Headers();

    headers.append('Authorization', 'No Auth');
    headers.append('Content-Type', 'application/json');

    // NOTE FOR LOCAL DEV
    const post = this.http.get('http://localhost:3000/posts/list',
      {headers: headers}).map(res => res.json());


    return post;
  };
  getPopularPosts() {
    const headers = new Headers();

    headers.append('Authorization', 'No Auth');
    headers.append('Content-Type', 'application/json');

    // NOTE FOR LOCAL DEV
    const post = this.http.get('http://localhost:3000/posts/listPopular',
      {headers: headers}).map(res => res.json());


    return post;
  };


  addPost(post) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');


    // NOTE FOR LOCAL DEV
    const postObservable = this.http.post('http://localhost:3000/posts/add',
      post, {headers: headers}).map(res => res.json());
    return postObservable;

  }
  
  deletePost(post) {


    // NOTE FOR LOCAL DEV
    return this.http.delete('http://localhost:3000/posts/delete',
      post);
    
  }
}
