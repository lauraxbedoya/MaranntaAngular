import { Component, NgModule, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState, selectSessionUserInfo } from "src/app/store";
import { storeUser } from "src/app/store/session.actions";
import { AdminService } from "src/services/admin.service";
import { UserService } from "src/services/user.service";
import storage, { AUTH_TOKEN } from "src/utils/storage";
import { AdminType, UserType } from "src/utils/types";


type CategoryTypes = {
  cat: string,
  route: string
}

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu-style.css']
})

export class NavMenu implements OnInit {
  
  routeHome: string = 'MARANNTA';
  routeLogin: string = 'Entrar';
  routeSignUp: string = 'Registrarse';
  routeInventory: string = 'Inventario';
  signOut: string = 'Cerrar Sesion';
  user$: Observable<UserType | AdminType | null> = this.store.select(selectSessionUserInfo);

  categories: CategoryTypes[] = [
    {cat: 'Bodies en Encaje', route: '/bodies_encaje'},
    {cat: 'Otros Bodies', route: '/bodies'},
    {cat: 'Crop Tops ', route: '/crop_tops'},
    {cat: 'Piel de Durazno', route: '/piel_durazno'},
  ]
  
  constructor(
    private _userService: UserService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  async ngOnInit() {
    (await this._userService.getUser()).subscribe((data: { user: UserType }) => {
      this.store.dispatch(storeUser(data.user));
    });
  }

  onSearch(event: string) {}

  handleLogOut() {
    storage.remove(AUTH_TOKEN);
    this.store.dispatch(storeUser(null));
    this.router.navigate(['/']);
  }
}