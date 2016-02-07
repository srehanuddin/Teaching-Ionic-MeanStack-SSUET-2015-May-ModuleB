/*
 * Angular
 */
import {Component, Injector} from 'angular2/core';
import {CanActivate} from 'angular2/router';

/*
 * Services
 */
import {AuthService} from './../services/AuthService';

@Component({
  selector: 'protected',
  template: `<h1>Protected content</h1>`
})
@CanActivate(
  (nextInstr: any, currInstr: any) => {
      
      console.log("nextInstr")
      console.log(nextInstr)
      console.log(currInstr)
    let injector: any = Injector.resolveAndCreate([AuthService]);
    let authService: AuthService = injector.get(AuthService);
    return authService.isLogged();
  }
)
export class ProtectedComponent {
}
