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

}
