import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import { storeUser } from "src/app/store/session.actions";
import { UserService } from "src/services/user.service";
import storage, { AUTH_TOKEN } from "src/utils/storage";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
})

export class LoginForm {
  @Input() user: string = '';
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() linkLogin: string = '';
  messageError: string = "Todos los campos son requeridos";

  constructor(
    private _userService: UserService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  validateForm(): boolean {
    if(!this.email || !this.password) {
      alert(this.messageError)
      return false
    }
    return true
  }

  async onLogin() {
    if (!this.validateForm()) return;

    (await this._userService.login(this.email, this.password))
      .subscribe((data: {accessToken: string, user: any}) => {
        this.store.dispatch(storeUser({ ...data.user, isAdmin: false }));
        storage.save(AUTH_TOKEN, data.accessToken);
        this.router.navigate(['/']);
      })  
  }
}