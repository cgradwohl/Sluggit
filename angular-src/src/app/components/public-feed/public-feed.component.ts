import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-feed',
  templateUrl: './public-feed.component.html',
  styleUrls: ['./public-feed.component.css']
})
export class PublicFeedComponent implements OnInit {

  //class properties
  title: string;
  username: string;
  postBody: string;
  timeStamp: number = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
