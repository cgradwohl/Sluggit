import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

<<<<<<< HEAD


add(title, description): boolean {
      console.log( 'Title:', `${title.value}`, 'Description:', `${description.value}`);
=======
add(title, description): boolean {
      console.log('Title:', `${title.value}`, 'Description:', `${description.value}`);
>>>>>>> master
      return false;
  }
}
