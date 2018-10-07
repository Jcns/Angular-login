import { Component, OnInit } from '@angular/core';

import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public tokenAuthService:Angular2TokenService) { }

  ngOnInit() {
  }

}
