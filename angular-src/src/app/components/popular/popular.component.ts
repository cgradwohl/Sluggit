import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  blogs: any;

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.postService.getPopularPosts().subscribe( blogs => {
      this.blogs = blogs.reverse();
  },
  err => {
    console.log(err);
    return false;
  });
}

viewPost(blog) {
  this.postService.viewUserPost(blog.username).subscribe( blogs => {
    this.blogs = blogs.reverse();
  });
}

viewThisPost(blog) {
  this.postService.viewPost(blog._id).subscribe( blogs => {
    this.blogs = blogs.reverse();
  });
}

upvote(blog) {
  const post = {
    _id: blog._id,
  };
  this.postService.addUpvote(post).subscribe( data => {
    if (data.success) {
      blog.popularity += 1;
    }
  });
}

downvote(blog) {
  const post = {
    _id: blog._id,
  };
  this.postService.addDownvote(post).subscribe( data => {
    if (data.success) {
      blog.popularity -= 1;
    }
  });
}

deleteThisPost(blog) {
  const post = {
    _id: blog._id,
  };
  this.postService.deletePost(post).subscribe( data => {
    if (data.success) {
      this.postService.getPopularPosts().subscribe( blogs => {
        this.blogs = blogs.reverse();
    })
  }
  });
}

}
