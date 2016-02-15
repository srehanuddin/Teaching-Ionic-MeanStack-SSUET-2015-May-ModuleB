import { Component } from "angular2/core" ;
import config from "./../../config";

import {RouteParams, CanActivate} from "angular2/router"


@Component({
    selector : 'todos',
    templateUrl : config.componentPath +'todos/todos.html',  
})
@CanActivate(
  (nextInstr: any, currInstr: any) => {
    
    alert("asdas");
    console.log(nextInstr)
    console.log(currInstr)
    
    window.location.href = "http://google.com"
    //let injector: any = Injector.resolveAndCreate([AuthService]);
    //let authService: AuthService = injector.get(AuthService);
    //return authService.isLogged();
    
    return false;
  }
)
export class Todos{
    todos = config.todos;
    id: string;
    
    todo : string;
    
    constructor(private routeParams: RouteParams){
        this.id = routeParams.get("id");
        
        this.todo = this.todos[this.id]
        
    }
}