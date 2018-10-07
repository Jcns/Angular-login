import { MzValidationModule } from 'ngx-materialize';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

	signInUser = {
    	email: '',
    	password: ''	
	};

	@Output() onFormResult = new EventEmitter<any>();

	constructor(
		private tokenAuthService:Angular2TokenService,
		private router:Router
	) { }

  	ngOnInit() {}

  	onSignInSubmit(){

	    this.tokenAuthService.signIn(this.signInUser).subscribe(

	        res => {
	          if(res.status == 200){
	            this.onFormResult.emit({signedIn: true, res})
	            this.router.navigate(['/'])
	          }
	        },

	        err => {
	          console.log('err:', err);
	          this.onFormResult.emit({signedIn: false, err})
	        }
	    )

	}


}
