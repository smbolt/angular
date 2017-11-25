import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SpaFxUserApi } from '../../../spafx/spafx-users/spafx-user-api';

@Injectable()
export class UserService implements SpaFxUserApi {

  isAuthenticated = false;

  constructor() {}

  signIn( userName: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + userName + ' password ' + password + ' ' + rememberMe);
    this.isAuthenticated = true;
    return Observable.of({});
  }


}
