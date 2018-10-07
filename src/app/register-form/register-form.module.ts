import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form.component';
import { RegisterFormRoutingModule } from './register-form-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RegisterFormRoutingModule
  ],
  providers: [ ]
})
export class RegisterFormModule { }
