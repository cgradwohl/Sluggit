import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { NativeAuthService } from '../../services/native-auth.service';

@Component({
  selector: 'app-popular',
  templateUrl: './public-feed.component.html',
  styleUrls: ['./public-feed.component.css']
})
export class PublicFeedComponent implements OnInit {
  blogs: any;
  profile: any;
  hidden: Boolean[];
  owner: Boolean[];
  descr: String[];
  showDropdown: Boolean[];
  showVote: Boolean[];
  voted: Number[];
  enableDropDown: Boolean[];

  constructor(
    private postService: PostService,
    private router: Router,
    private nativeAuthService: NativeAuthService,
  ) { this.hidden = []; this.descr = []; this.owner = [];
      this.showDropdown = []; this.voted = []; this.showVote = []; this.enableDropDown = []; }

  ngOnInit() {
    this.refresh();
  };

  refresh() {
    this.nativeAuthService.getProfile().subscribe( profile => {
      this.profile = profile.user;
      this.postService.getPopularPosts().subscribe( blogs => {
        this.blogs = blogs.reverse();
        var exists = 0;
        for( var i = 0; i < this.blogs.length; i++)
        {
            this.hidden.push(false);
            this.descr.push("");
            if(this.blogs[i].username.trim() == this.profile.username.trim())
              this.owner.push(true);
            else
              this.owner.push(false);
            for(var q = 0; q < this.blogs[i].votedUp.length; q++)
            {
              if(this.blogs[i].votedUp[q].trim() == this.profile.username)
              {
                this.voted.push(1);
                this.showVote.push(false);
                exists = 1;
                break;
              }
            }
            if(exists != 1)
            {
              for(var q = 0; q < this.blogs[i].votedDown.length; q++)
              {
                if(this.blogs[i].votedDown[q].trim() == this.profile.username.trim())
                {
                  this.voted.push(-1);
                  this.showVote.push(false);
                  exists = 1;
                  break;
                }
              }
              if(exists == 0)
              {
                  this.voted.push(0);
                  this.showVote.push(true);
              }
          }
          exists = 0;

          for(var q = 0; q < this.blogs[i].tagged.length; q++)
          {
            if(this.blogs[i].tagged[q].trim() == this.profile.username.trim())
            {
              this.enableDropDown.push(false);
              exists = 1;
              break;
            }
          }
          if(exists == 0)
            this.enableDropDown.push(true);
        }
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

upvote(blog, index) {
  const post = {
    _id: blog._id,
    username: this.profile.username
  };
  this.postService.addUpvote(post).subscribe( data => {
    if (data.success) {
      blog.popularity += 1;
      this.showVote[index] = false;
    }
  });
};

downvote(blog, index) {
  const post = {
    _id: blog._id,
    username: this.profile.username
  };
  this.postService.addDownvote(post).subscribe( data => {
    if (data.success) {
      blog.popularity -= 1;
      this.showVote[index] = false;
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
  if(this.hidden[index] == false)
    this.hidden[index] = true
  else
    this.hidden[index] = false;
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

toggleDropDown(index){
  if(this.showDropdown[index] == false)
    this.showDropdown[index] = true
  else
    this.showDropdown[index] = false;
};

addTag(blog, title, index) {
  const post = {
    _id: blog._id,
    tagTitle: title,
    username: this.profile.username
  }
  this.postService.addTag(post).subscribe( data => {
    this.showDropdown[index] = false;
    this.refresh();
  });
}

}
