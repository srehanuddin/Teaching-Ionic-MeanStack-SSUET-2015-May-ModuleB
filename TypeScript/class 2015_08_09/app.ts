//In languages like C# and Java, one of the main tools in the toolbox 
//for creating reusable components is 'generics', that is,
//being able to create a component that can work over a variety of 
//types rather than a single one. 
//This allows users to consume these components and use their own types.


//Human
//Employee
//Officer

//[1,2,3,4]

class Human{}
class Developer{}
class Manager{}

var HumanArr : Human[] = [];



 class ArrayList <T> {
	private _linkList : T[] = [];
	private currentIndex = 0;

    push(a : T){
        this._linkList.push(a);
    }
    pop(){
        this._linkList.shift();
    }		
}
[1,2,3,4,5]

var a = [1,2,3,4,5]

a.push(1)
a.pop()


class LinkList <T> {
	private _linkList : T[] = [];
	private currentIndex = 0;
 
	next(){
		this.currentIndex ++;
		return this._linkList[this.currentIndex];
	}	
    
    add(a : T){
        this._linkList.push(a);
    }	
}

var lList = new LinkList<string>();
lList.add("1");
lList.add("2");

var lList1 = new LinkList<number>();
lList1.add(1);
lList1.add(2);

lList1.next();

/*
class Container<T>
{
    private _array: T[];
    constructor(){
        this._array = [];
    }
    
    add(item: T){
        this._array.push(item);
    }
}



class LinkListStr {
	private _linkList : string[] = [];
	private currentIndex = 0;
	
	next(){
		this.currentIndex ++;
		return this._linkList[this.currentIndex];
	}		
}

*/
/*

array = [1,2,3,4,5,6]
a[0];
b[1];




linklist = [1,2,3,4,5,6]
next()

que [1,2,3,4,5,6]
deque
enque

stack 
[1,2,3,4,5,6]
push pop



class Container<T>
{
    private _array: T[];
    
    constructor(){
        this._array = [];
    }
    
    add(item: T){
        this._array.push(item);
    }
}

let c = new Container<string>();
let c1 = new Container<number>();
*/

/*
import {add, sub} from "math";
import {myClass} from 'lib';
import {abc, abc1} from 'lib';

abc();
abc1();

new myClass();

//var addResult = add(2, 3);
var subResult = sub(3, 2);
//console.log(addResult);
console.log(subResult);
*/