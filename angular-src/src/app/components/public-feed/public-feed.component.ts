import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-public-feed',
  templateUrl: './public-feed.component.html',
  styleUrls: ['./public-feed.component.css']
})


export class PublicFeedComponent implements OnInit {
  blogs: any;
  
  remove(index: number): void {
    if (confirm('Are you sure?')) {
      this.postService.deletePost(this.blogs[index]);
      this.blogs.splice(index, 1);
      console.log(1);
    }
  }


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

}
