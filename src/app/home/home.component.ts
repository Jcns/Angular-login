import { Component, OnInit } from '@angular/core';

import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {

  constructor(public authTokenService:Angular2TokenService) { }

  ngOnInit() {
  }

}
