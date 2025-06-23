import {Component} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _router: Router) {}

  public googleAuth() {
    this._authService.googleAuth().then(token => {
      this._userService.getUserInfo(token).subscribe({
        next: (user) => {
          this._userService.setUser(user);
          this._router.navigate(['/user-information']);
        },
        error: (err) => {
          console.error('Error autenticando en backend', err);
        }
      });
    });
  }

  public facebookAuth() {
    this._authService.facebookAuth().then(token => {
      this._userService.getUserInfo(token).subscribe({
        next: (user) => {
          this._userService.setUser(user);
          this._router.navigate(['/user-information']);
        },
        error: (err) => {
          console.error('Error autenticando en backend', err);
        }
      });
    });
  }
}
