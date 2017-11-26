import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SpaFxUserApi } from '../../../spafx/spafx-users/spafx-user-api';
import { Router } from '@angular/router';

@Injectable()
export class UserService implements SpaFxUserApi {

  isAuthenticated = false;

  constructor(private router: Router) {}

  signIn( userName: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + userName + ' password ' + password + ' ' + rememberMe);
    this.isAuthenticated = true;
    return Observable.of({}).delay(2000);
  }

  signOut(): Observable<any> {
    this.isAuthenticated = false;
    this.router.navigate(['/signin']);
    return Observable.of({});
  }

}
