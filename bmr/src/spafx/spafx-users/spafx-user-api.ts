import { Observable } from 'rxjs/Observable';

export abstract class SpaFxUserApi {
  signIn: (userName: string, password: string, rememberMe: boolean) => Observable<any>;
  signOut: () => Observable<any>;
  // changePassword:
}
