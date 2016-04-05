import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><input type="text" [(ngModel)]="abc"/>' +
    '<input type="text"  [(ngModel)]="abc" />' +
    '<button (click)="clickFn(i)" >Click Here</button>'
})
export class AppComponent { 
    
    abc = "ABC";
    
    clickFn(elem){
        
        console.log(this.abc)
        
        this.abc = elem.value;
        console.log(elem);
    }
    
}

