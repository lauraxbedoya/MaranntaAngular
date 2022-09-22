import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/services/user.service';
import { LoginForm } from './component/login-form.component';
import { SignUp } from './signUp/sign-up.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginUser } from './login-user/login-user.component';

@NgModule({
  declarations: [
    LoginUser,
    SignUp,
    LoginForm,
  ],
  providers: [
    UserService
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ]
})
export class AuthModule { }
