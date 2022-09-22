import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import storage, { AUTH_TOKEN } from 'src/utils/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private _userService: UserService,
  ) {}

  async ngOnInit() {
    const token = storage.get(AUTH_TOKEN);
    if(token) {
      (await this._userService.getUser())
      .subscribe((data: { user: any }) => {
        this.router.navigate(['/']);
      })
    } else {
      this.router.navigate(['/user/login' && '/admin/login'])
    }
  }
  title = 'maranntaPage';
}
