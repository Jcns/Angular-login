import { MzValidationModule } from 'ngx-materialize';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

	signUpUser = {
    	email: '',
    	password: '',
    	passwordConfirmation: ''
	};

	@Output() onFormResult = new EventEmitter<any>();


	constructor(
		private tokenAuthService: Angular2TokenService
		private router:Router
	) { }

	ngOnInit() {}

	onSignUpSubmit(){

	    this.tokenAuthService.registerAccount(this.signUpUser).subscribe(

	        (res) => {

	          if (res.status == 200){
	            this.onFormResult.emit({signedUp: true, res})
	            this.router.navigate(['/'])
	          }

	        },

	        (err) => {
	          console.log(err.json())
			  this.onFormResult.emit({signedUp: false, err})
			}
		)
	}

}
