import { Component } from "angular2/core" ;
import config from "./../../config";


@Component({
    selector : 'home',
    templateUrl : config.componentPath +'home/home.html',  
})
export class Home{
    constructor(){
    }
}
 