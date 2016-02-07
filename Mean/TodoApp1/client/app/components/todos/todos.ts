import { Component } from "angular2/core" ;
import config from "./../../config";

import {RouteParams} from "angular2/router"


@Component({
    selector : 'todos',
    templateUrl : config.componentPath +'todos/todos.html',  
})
export class Todos{
    todos = ["a", "b", "c"]
    id: string;
    
    todo : string;
    
    constructor(private routeParams: RouteParams){
        this.id = routeParams.get("id");
        
        this.todo = this.todos[this.id]
        
    }
}