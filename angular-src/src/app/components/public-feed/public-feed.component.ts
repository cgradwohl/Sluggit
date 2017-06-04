import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-feed',
  templateUrl: './public-feed.component.html',
  styleUrls: ['./public-feed.component.css']
})


export class PublicFeedComponent implements OnInit {
  blogs: any;
  hidden: Boolean[];
  descr: String[];

  constructor(
    private postService: PostService,
    private router: Router,
  ) { this.hidden = []; this.descr = []; }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.postService.getPost().subscribe( blogs => {
      this.blogs = blogs.reverse();
      for( var i = 0; i < this.blogs.length; i++)
      {
          this.hidden.push(false);
          this.descr.push("");
      }
    },
    err => {
      console.log(err);
      return false;
    })
};

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
        this.refresh();
      }
    });
  }

  showPost(index) {
    this.hidden[index] = true;
  };

  submitEdit(index, blog) {
    const post = {
      _id: blog._id,
      description: this.descr[index]
    }
    this.hidden[index] = false;
    this.postService.editPost(post).subscribe( data => {
      if (data.success) {
        this.refresh();
      } else {
          console.log("Failure!");
      }
    });
  };
}
