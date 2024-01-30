import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import { storeUser } from "src/app/store/session.actions";
import { UserService } from "src/services/user.service";
import storage, { AUTH_TOKEN } from "src/utils/storage";

@Component({
  selector: 'login-form',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.styles.css']
})

export class LoginUser {
  email: string = 'laura@gmail.com';
  password: string = 'laura';
  messageError: string = "Todos los campos son requeridos";
  token: string = '';

  constructor(
    private _userService: UserService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  validateForm(): boolean {
    if (!this.email || !this.password) {
      alert(this.messageError)
      return false
    }
    return true
  }

  async onLogin() {
    if (!this.validateForm()) return;

    (await this._userService.login(this.email, this.password))
      .subscribe((data: { accessToken: string, user: any }) => {
        this.store.dispatch(storeUser({ ...data.user }));
        storage.save(AUTH_TOKEN, data.accessToken);
        this.router.navigate(['/']);
      })
  }
}