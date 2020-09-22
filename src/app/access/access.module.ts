import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatewayComponent } from './gateway/gateway.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [GatewayComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule
  ]
})
export class AccessModule { }
