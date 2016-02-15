import { Component } from "angular2/core" ;
import config from "./../../config";
import { ROUTER_DIRECTIVES , RouteConfig} from "angular2/router";


import { Contact1 } from "./../contact1/contact";
import { Contact2 } from "./../contact2/contact";

@Component({
    selector : 'contact',
    templateUrl : config.componentPath +'contact/contact.html',
    directives : [ROUTER_DIRECTIVES]   
})
@RouteConfig([
    //{ path : "/",  redirectTo : ["Home"] },   
    { path : "/contact1", name: "Contact1", component : Contact1, useAsDefault : true  },
    { path : "/contact2", name: "Contact2", component : Contact2  }
])
export class Contact{
    constructor(){
    }
}
 