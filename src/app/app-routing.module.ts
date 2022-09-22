import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUser } from './auth/login-user/login-user.component';
import { SignUp } from './auth/signUp/sign-up.component';

const routes: Routes = [
  { path: 'user/login', component: LoginUser },
  { path: 'user/registration', component: SignUp },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
