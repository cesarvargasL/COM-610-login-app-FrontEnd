import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {GoogleAuthProvider, FacebookAuthProvider} from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _auth: AngularFireAuth
  ) {}


  public googleAuth() {
    return this._auth.signInWithPopup(new GoogleAuthProvider())
      .then(async (result) => {
        const user = result.user;
        if (user) {
          const token = await user.getIdToken();
          return token;
        }
        throw new Error('No user found');
      });
  }

  public facebookAuth() {
    return this._auth.signInWithPopup(new FacebookAuthProvider()).then(async (result) => {
      const user = result.user;
      if (user) {
        const token = await user.getIdToken();
        return token;
      }
      throw new Error('No user found');
    });
  }

  public getStateUser() {
    return this._auth.authState;
  }

  async _logOut() {
    this._auth.signOut();
  }
}
