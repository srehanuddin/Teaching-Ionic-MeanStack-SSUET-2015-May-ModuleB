import { Component } from "angular2/core" ;
import config from "./../../config";

import { ROUTER_DIRECTIVES , RouteConfig} from "angular2/router";

import { Menu } from "./../menu/menu";
import { Home } from "./../home/home";
import { About } from "./../about/about";
import { Contact } from "./../contact/contact";
import { Contact1 } from "./../contact1/contact";
import { Contact2 } from "./../contact2/contact";
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
    { path : "/contact/...", name: "Contact", component : Contact  },
    //{ path : "/contact1", name: "Contact1", component : Contact1  },
    //{ path : "/contact2", name: "Contact2", component : Contact2  },
    { path : "/todos/:id", name: "Todos", component : Todos  }
])
export class MyApp{
    
    todos = config.todos;
    
    constructor(){
    }
}