import { Component } from "@angular/core";
import { Router } from "@angular/router";
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
    dateOfBirth: "",
    gender: "Masculino",
    offers: true,
    politics: true,
  }

  constructor(
    private router: Router,
    private _userService: UserService,
  ) {}

  async handleSignUp() {
    if(!this.user.name || !this.user.lastname || !this.user.email || !this.user.password || !this.user.gender || !this.user.offers || !this.user.politics) {
      alert('Todos los campos son requeridos')
    } else {
      (await this._userService.create(this.user)).subscribe((data: UserType) => {
        console.log(data)
        this.router.navigate(['/']);
      })
    }
  }
}