import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUser } from './auth/login-user/login-user.component';
import { SignUp } from './auth/signUp/sign-up.component';
import { Home } from './home/home';
import { Stock } from './home/stock/stock';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'user/login', component: LoginUser },
  { path: 'user/registration', component: SignUp },
  { path: 'inventory', component: Stock }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
