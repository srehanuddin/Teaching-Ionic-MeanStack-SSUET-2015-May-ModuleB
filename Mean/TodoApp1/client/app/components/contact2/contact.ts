import { Component, Injector } from "angular2/core" ;
import config from "./../../config";
import {CanActivate} from "angular2/router";


@Component({
    selector : 'contact-form',
    templateUrl : config.componentPath +'contact2/contact.html',  
})
@CanActivate(
  (nextInstr: any, currInstr: any) => {
    
    console.log(nextInstr)
    console.log(currInstr)
    
    //let injector: any = Injector.resolveAndCreate([AuthService]);
    //let authService: AuthService = injector.get(AuthService);
    //return authService.isLogged();
    
    return false;
  }
)
export class Contact2{
    constructor(){
    }
}
 