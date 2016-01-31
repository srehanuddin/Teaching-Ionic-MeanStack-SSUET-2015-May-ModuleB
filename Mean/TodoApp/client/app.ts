import { bootstrap } from "angular2/platform/browser" ;
import { Component, EventEmitter } from "angular2/core" ;
import { Http, Response, RequestOptions, Headers } from 'angular2/http';
import { HTTP_PROVIDERS } from 'angular2/http';

class newTask {
	task: string;
	desp: string;
	status: boolean;
	show: boolean;
    id : number;
	
	constructor(task:string,desp:string,status: boolean,show: boolean){
		this.task = task;
		this.desp = desp;
		this.status = status;
		this.show = show
        this.id = Date.now();
		
	}
	delete(){
		this.status = false;
	}

}


@Component({
	selector: '.myCom',
	host:{
		class: 'td'
	},
	inputs: ['tasks'],
    outputs : ['deleteEvent'],
	template:`
	<td> {{ tasks.task }} </td>
	<td> {{ tasks.desp }} </td>
	<td><button class="ui green button" *ngIf="tasks.status" (click)="inactive()">Activated</button> <button class="ui red button" *ngIf="!tasks.status"  (click)="inactive()">Unactivated</button></td>
	<td><button class="ui red button" (click)="delete()">Remove</button> </td>	
	
	`
})
class taskTable {
	tasks :newTask;
    
    deleteEvent : EventEmitter<newTask>;
    
    constructor(){
        this.deleteEvent = new EventEmitter();
    }
	
	inactive(){
		this.tasks.status = this.tasks.status ? false : true
	}
	delete(){
		//this.tasks.show = false;
        
        console.log("curTask");
        console.log(this.tasks);
        
        this.deleteEvent.emit(this.tasks);
	}
	
}


//Main Component

@Component({
	selector: 'todoApp',
	directives:[taskTable],
	templateUrl: 'TodoApp.html',

})
class todoApp{
	tasks: newTask[] = [];
    loadingTasks : boolean;
    
    constructor(public http: Http) {
        
        this.getTodos();
    }
    
    getTodos(): void {
        this.loadingTasks = true;
        this.http.request('http://localhost:3000/api/todo')
        .subscribe((res: Response) => {
            console.log(res.json());
            setTimeout(()=>{
                this.tasks = res.json();
                this.loadingTasks = false;
            }, 1000)
            
        });
    }
	
	addTodo(task: HTMLInputElement, desp:HTMLInputElement){
		console.log(`task: ${task.value} description : ${desp.value}`)
			var obj = new newTask(task.value,desp.value,true,true)
			console.log(obj)
		
            let headers: Headers = new Headers();
            headers.append('Content-Type', 'application/json');

            let opts: RequestOptions = new RequestOptions();
            opts.headers = headers;
        	
            this.http.post('http://localhost:3000/api/todo',
                JSON.stringify(obj),
                opts )
                .subscribe((res: Response) => {
                     this.tasks.push(res.json().todo);
                     
                     task.value = "";
			         desp.value = "";
                 });
    		
	}
    
    deleteTask(task){
        
        this.http.delete('http://localhost:3000/api/todo/' + task.id)
                .subscribe((res: Response) => {
                     
                     for(var i = 0; i < this.tasks.length; i++){
                        if(this.tasks[i].id == task.id){
                            this.tasks.splice(i, 1);                
                            break;
                        }
                    }
                    
                     
                 });
    }
    
    
    
    
    data: Object;
    loading: boolean;
    makeRequest(): void {
        this.loading = true;
        this.http.request('http://jsonplaceholder.typicode.com/posts/1')
        .subscribe((res: Response) => {
            
            console.log(res)
            console.log( res.json())
            this.data = res.json();
            this.loading = false;
        });
    }
	
}


bootstrap(todoApp, [HTTP_PROVIDERS])