import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  blogs: any;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPopularPosts().subscribe( blogs => {
      this.blogs = blogs.reverse();
  },
  err => {
    console.log(err);
    return false;
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

}
