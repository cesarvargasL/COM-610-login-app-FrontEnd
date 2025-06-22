import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../model/user';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformation implements OnInit {

  user = new User();

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _router: Router) {}

  public ngOnInit(): void {
    this._userService.getUser().subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }

  public logOut(){
    this._authService._logOut().then(()=>{
      this._router.navigate(['/auth/login']);
    });
  }
}
