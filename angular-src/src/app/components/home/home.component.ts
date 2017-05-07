import { Component, OnInit } from '@angular/core';
import { NativeAuthService } from '../../services/native-auth.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



// HomeComponent CONFIG
export class HomeComponent implements OnInit {

  constructor(
    private nativeAuthService: NativeAuthService
  ) { }

  ngOnInit() { }

}
