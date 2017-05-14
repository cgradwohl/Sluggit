import { Component, OnInit } from '@angular/core';
import { NativePostService } from '../../services/native-post.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  
  
  title: String;
  description: String;

  constructor(
    private nativePostService: NativePostService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onNativeAddPost() {
    const post = {
      title: this.title,
      description: this.description
    };

    this.nativePostService.addPost(post).subscribe( data => {
      if (data.success) {
        this.flashMessage.show('Post successful!', { cssClass: 'alert-success' });
        this.router.navigate(['/feed']);

      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
      }
    });
  }

}
