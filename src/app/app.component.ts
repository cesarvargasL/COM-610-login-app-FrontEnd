import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _router: Router, private _authService: AuthService) {
  }

  public ngOnInit() {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (!event.urlAfterRedirects.includes('/user-information')) {
          this._authService._logOut();
        }
      }
    });
  }
}
