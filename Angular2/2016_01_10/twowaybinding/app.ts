import { bootstrap } from "angular2/platform/browser" ;
import { Component } from "angular2/core" ;
//import { NgFor } from "angular2/common" ;

@Component({
    selector: 'hello-world' ,
    template: `
        <div>
        Hello {{name}}
        <br>
        {{ 1 + 1 }}
        <br>
        {{dt}}
        
        <br>
        
        <ul>
            <li *ngFor="#n of names" >
                
                Name : <b>{{n}}</b>
            
            </li>
        </ul>
        
        <ul>
            <li *ngFor="#n of persons" >{{n | json}} {{n.name}}
            </li>
        </ul>
        
        <br>
        <br>
        
        
        <input type="text" [(ngModel)]="country" />
        {{country}}
        
        </div>
    `
})
class HelloWorld {
    name : string;
    dt : string;
    
    names: string[];
    persons: { name : string}[];
    
    country : string = "";
    
    constructor(){
        this.name = "Reha"
        this.dt = (new Date()).toString()
        
        this.names = [ ' Ari ' , ' Carlos' , ' Felipe' , ' Nate' ];
        
        this.persons = [ { name : ' Ari1 '}  ,{ name : ' Ari2 '}  ];
    }
    
}

bootstrap(HelloWorld);