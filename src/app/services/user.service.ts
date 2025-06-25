import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _apiUrl = 'https://login-app-com610-backend.onrender.com/api/user/userInfo';
  private _userSubject = new BehaviorSubject<any>(null);

  constructor(private _http: HttpClient) { }

  public getUserInfo(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this._http.get(this._apiUrl, { headers });
  }

  public setUser(user: any) {
    this._userSubject.next(user);
  }

  public getUser(): Observable<any> {
    return this._userSubject.asObservable();
  }
}
