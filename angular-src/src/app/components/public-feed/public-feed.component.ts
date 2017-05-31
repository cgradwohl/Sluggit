import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-public-feed',
  templateUrl: './public-feed.component.html',
  styleUrls: ['./public-feed.component.css']
})


export class PublicFeedComponent implements OnInit {
  blogs: any;


  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getPost().subscribe( blogs => {
      this.blogs = blogs.reverse();
    },
    err => {
      console.log(err);
      return false;
    });
  }

  upvote() {
    const post = this.blogs;
    this.postService.addUpvote(post).subscribe( data => {
      if (data.success) {
        this.blogs.popularity += 1;
      }
    });
  }

  downvote() {
    const post = this.blogs;
    this.postService.addDownvote(post).subscribe( data => {
      if (data.success) {
        this.blogs.popularity += 1;
      }
    });
  }

}
