import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/services/user.service';
import { SignUp } from './signUp/sign-up.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginUser } from './login-user/login-user.component';
import { InputSessionComponent } from '../components/input-session/input-session-component';

@NgModule({
  declarations: [
    SignUp,
    LoginUser,
    InputSessionComponent
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
