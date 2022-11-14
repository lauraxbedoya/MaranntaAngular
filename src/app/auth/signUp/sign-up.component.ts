import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import { storeUser } from "src/app/store/session.actions";
import { UserService } from "src/services/user.service";
import { UserType } from "src/utils/types";

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html'
})

export class SignUp {
  genderList: string[] = ["Seleccionar...","Masculino", "Femenino"];

  isCheckedOffers: boolean = false;
  isCheckedPolitics: boolean = false;

  user: UserType = {
    name: "daniel",
    lastname: "uribe",
    email: "dani.uribe@gmail.com",
    password: "daniel",
    dateofbirth: null,
    gender: "Masculino",
    politics: true,
    role: "user"
  }

  constructor(
    private router: Router,
    private _userService: UserService,
    private store: Store<AppState>
  ) {}

  validationForm(): boolean {
    if(!this.user.name || !this.user.lastname || !this.user.email || !this.user.password) {
      alert('Ciertos campos son requeridos')
      return false
    }
    return true
  }

  async handleSignUp() {
    if(!this.validationForm()) return;

    (await this._userService.create(this.user)).subscribe((data: UserType) => {
      console.log(data)
      alert('Cuenta creada corretamente')
      this.store.dispatch(storeUser({ ...data }));
    })
  }
}