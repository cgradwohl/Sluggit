import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NativeAuthService } from '../../services/native-auth.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {


  title: String;
  description: String;
  // user: String;

  constructor(
    private postService: PostService,
    private userService: NativeAuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }




// onNativeAddPost()
// grabs posts data after submitting form and calls addPost() using observables

  onAddPostSubmit() {

    // requires native auth login to post
    this.userService.getProfile().subscribe(profile => {

      const post = {
        title: this.title,
        description: this.description,
        username: profile.user.username
      };

      this.postService.addPost(post).subscribe( data => {
        if (data.success) {
          this.flashMessage.show('Post successful!', { cssClass: 'alert-success' });
          this.router.navigate(['/feed']);

        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
        }
      });
    });
  }



}
