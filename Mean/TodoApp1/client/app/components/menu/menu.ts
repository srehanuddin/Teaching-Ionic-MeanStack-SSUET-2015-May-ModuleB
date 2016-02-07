import { Component } from "angular2/core" ;
import config from "./../../config";

import { ROUTER_DIRECTIVES } from "angular2/router";


@Component({
    selector : 'menu',
    templateUrl : config.componentPath +'menu/menu.html',
    directives : [ROUTER_DIRECTIVES]    
})
export class Menu{
    
}