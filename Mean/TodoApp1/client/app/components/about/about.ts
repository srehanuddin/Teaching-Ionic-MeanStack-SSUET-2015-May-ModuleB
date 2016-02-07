import { Component } from "angular2/core" ;
import config from "./../../config";


@Component({
    selector : 'about',
    templateUrl : config.componentPath +'about/about.html',  
})
export class About{
    constructor(){
    }
}