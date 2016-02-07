import { Component } from "angular2/core" ;
import config from "./../../config";

import { ROUTER_DIRECTIVES , RouteConfig} from "angular2/router";

import { Menu } from "./../menu/menu";
import { Home } from "./../home/home";
import { About } from "./../about/about";
import { Todos } from "./../todos/todos";

@Component({
    selector : 'my-app',
    templateUrl : config.componentPath +'main/main.html',
    directives : [ROUTER_DIRECTIVES, Menu]    
})
@RouteConfig([
    //{ path : "/",  redirectTo : ["Home"] },
    { path : "/home", name: "Home", component : Home, useAsDefault : true},
    { path : "/about", name: "About", component : About  },
    { path : "/todos/:id", name: "Todos", component : Todos  }
])
export class MyApp{
    constructor(){
    }
}