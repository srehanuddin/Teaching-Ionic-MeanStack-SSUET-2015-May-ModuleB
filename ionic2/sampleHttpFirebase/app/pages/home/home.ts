import {Page, NavController, Alert, ActionSheet} from 'ionic-angular';
import {Http} from 'angular2/http';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    
    list;
    
    
    tasks : FirebaseListObservable<any[]>;
    
    constructor(public http : Http, public af: AngularFire, public nav: NavController){
        
        this.tasks = af.list('/firebaseList');
        
    }   
    
    makeHttpRequest(){
        
        this.http.request("http://samplejsonapi.herokuapp.com/posts").subscribe((res) => {
            console.log(res.json())
            
            this.list = res.json();
        }, (err) => {
            console.log(err)
        })
        
    }
    
    
    addTask(task){
        
        this.tasks.add(task.value);
        
        //console.log(this.tasks.subscribe((a)=> { console.log(a) }));
        //alert(task.value);
        
        //this.tasks.push(task.value);
    }
    
    deleteTask(key){
        
        //this.tasks.remove(key);
        
        let alert = Alert.create({
            title: 'Confirm Delete',
            message: 'Are you sure?',
            buttons: [
            {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            },
            {
                text: 'Delete',
                handler: () => {
                    console.log('Buy clicked');
                    this.tasks.remove(key);
                }
            }
            ]
        });
        this.nav.present(alert);
        
        
        /*
        this.tasks.subscribe((a)=> { 
            console.log(a)
        })
        */
        
        //console.log(this.tasks[key]);
        //console.log(this.tasks);
        //var i = this.tasks.indexOf(item);
        //this.tasks.splice(i,1);
        
    }
    
    
    actionSheetShow(){
        
        let actionSheet = ActionSheet.create({
    title: 'Modify your album',
    buttons: [
      {
        text: 'Destructive',
        role: 'destructive',
        handler: () => {
          console.log('Destructive clicked');
        }
      },
      {
        text: 'Archive1',
        handler: () => {
          console.log('Archive clicked');
        }
      },
      {
        text: 'Archive2',
        handler: () => {
          console.log('Archive clicked');
        }
      },
      {
        text: 'Archive',
        handler: () => {
          console.log('Archive clicked');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });

  this.nav.present(actionSheet);
        
    }
    
}
