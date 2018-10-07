import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';
import { LoginFormRoutingModule } from './login-form-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    LoginFormRoutingModule
  ],
  providers: [ Angular2TokenService ]
})
export class LoginFormModule { }
