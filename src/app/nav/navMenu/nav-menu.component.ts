import { Component, Inject, NgModule, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState, selectSessionUserInfo } from "src/app/store";
import { storeUser } from "src/app/store/session.actions";
import { UserService } from "src/services/user.service";
import storage, { AUTH_TOKEN } from "src/utils/storage";
import { UserType } from "src/utils/types";

type CategoryTypes = {
  category: string,
  route: string
}

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu-style.css']
})

export class NavMenu implements OnInit {
  user$: Observable<UserType | null> = this.store.select(selectSessionUserInfo);
  categories: CategoryTypes[] = [
    {category: 'Bodies en Encaje', route: '/bodies_encaje'},
    {category: 'Otros Bodies', route: '/bodies'},
    {category: 'Crop Tops ', route: '/crop_tops'},
    {category: 'Piel de Durazno', route: '/piel_durazno'},
    {category: 'Vestidos de Baño', route: '/vestidos_baño'},
  ];
  
  constructor(
    private _userService: UserService,
    private router: Router,
    private store: Store<AppState>,
  ) {}

  async ngOnInit() {
    const token = storage.get(AUTH_TOKEN);
    if(token) {
      (await this._userService.getUser()).subscribe((data: { user: UserType }) => {
        this.store.dispatch(storeUser(data.user));
      })
    } else {
      this.router.navigate(['/user/registration'])
    }
  }

  onSearch(event: string) {}

  handleLogOut() {
    storage.remove(AUTH_TOKEN);
    this.store.dispatch(storeUser(null));
    this.router.navigate(['user/login']);
  }

  handleCategories() {}
}