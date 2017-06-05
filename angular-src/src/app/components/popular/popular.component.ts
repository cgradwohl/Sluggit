import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { NativeAuthService } from '../../services/native-auth.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  blogs: any;
  profile: any;
  hidden: Boolean[];
  owner: Boolean[];
  descr: String[];

  constructor(
    private postService: PostService,
    private router: Router,
    private nativeAuthService: NativeAuthService,
  ) { this.hidden = []; this.descr = []; this.owner = [];}

  ngOnInit() {
    this.refresh();
  };

  refresh() {
    this.nativeAuthService.getProfile().subscribe( profile => {
      this.profile = profile.user;
      console.log(this.profile.username);
      this.postService.getPopularPosts().subscribe( blogs => {
        this.blogs = blogs.reverse();
        for( var i = 0; i < this.blogs.length; i++)
        {
            this.hidden.push(false);
            this.descr.push("");
            console.log(this.blogs[i].username);
            console.log(this.profile.username);
            if(this.blogs[i].username == profile.username)
              this.owner.push(true);
            else
              this.owner.push(false);
              console.log(this.blogs[i].username == profile.username);
        }
        console.log(this.owner);
      },
      err => {
        console.log(err);
      });
    });
};

viewPost(blog) {
  this.postService.viewUserPost(blog.username).subscribe( blogs => {
    this.blogs = blogs.reverse();
  });
};

viewThisPost(blog) {
  this.postService.viewPost(blog._id).subscribe( blogs => {
    this.blogs = blogs.reverse();
  });
};

upvote(blog) {
  const post = {
    _id: blog._id,
  };
  this.postService.addUpvote(post).subscribe( data => {
    if (data.success) {
      blog.popularity += 1;
    }
  });
};

downvote(blog) {
  const post = {
    _id: blog._id,
  };
  this.postService.addDownvote(post).subscribe( data => {
    if (data.success) {
      blog.popularity -= 1;
    }
  });
};

deleteThisPost(blog) {
  const post = {
    _id: blog._id,
  };
  this.postService.deletePost(post).subscribe( data => {
    if (data.success) {
      this.refresh();
    }
  });
};

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
