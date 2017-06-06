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

  addUpvote(post) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // NOTE FOR LOCAL DEV
    const postObservable = this.http.post('http://localhost:3000/posts/postupvote',
      post, {headers: headers}).map(res => res.json());
    return postObservable;
  }

  addDownvote(post) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // NOTE FOR LOCAL DEV
    const postObservable = this.http.post('http://localhost:3000/posts/postdownvote',
      post, {headers: headers}).map(res => res.json());
    return postObservable;
  }

  viewUserPost(id) {
    const headers = new Headers();

    headers.append('Authorization', 'No Auth');
    headers.append('Content-Type', 'application/json');

    // NOTE FOR LOCAL DEV
    const post = this.http.get('http://localhost:3000/posts/listUser/' + id,
      {headers: headers}).map(res => res.json());
    return post;
  }

  viewPost(id) {
    const headers = new Headers();

    headers.append('Authorization', 'No Auth');
    headers.append('Content-Type', 'application/json');

    // NOTE FOR LOCAL DEV
    const post = this.http.get('http://localhost:3000/posts/post/' + id,
      {headers: headers}).map(res => res.json());
    return post;
  }

  deletePost(post) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // NOTE FOR LOCAL DEV
    const postObservable = this.http.delete('http://localhost:3000/posts/delete/' + post._id).map(res => res.json());
    return postObservable;
  }

  editPost(pst) {
    const headers = new Headers();

    headers.append('Authorization', 'No Auth');
    headers.append('Content-Type', 'application/json');

    // NOTE FOR LOCAL DEV
    const post = this.http.post('http://localhost:3000/posts/edit/', pst,
      {headers: headers}).map(res => res.json());
    return post;
  }

  addTag(pst) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // NOTE FOR LOCAL DEV
    const post = this.http.post('http://localhost:3000/posts/addTag',
      pst, {headers: headers}).map(res => res.json());
    return post;
  }
}
