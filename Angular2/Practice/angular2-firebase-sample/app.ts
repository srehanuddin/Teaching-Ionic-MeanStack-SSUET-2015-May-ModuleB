import { bootstrap } from "angular2/platform/browser" ;
import { Component } from "angular2/core" ;
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';


@Component({
    selector: 'reddit' ,
        host : {
            class : "myClass"
        },
    template: `    
        <h1>FireBase Sample App</h1>   
    `
})
class RedditApp {  

    items: Observable<any[]>;
    constructor(af: AngularFire){
           
    } 

}

bootstrap(RedditApp, [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://angular2-firebase-sample.firebaseio.com'),
]);

