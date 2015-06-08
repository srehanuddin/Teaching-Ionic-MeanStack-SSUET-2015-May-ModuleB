window.onload = function () {
    document.getElementById('a')["value"] = 1;
};
/*class Human {
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
    
    eat(){
        console.log(this.name + " is a Human and is eating");
    }
}

class Animal {
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
    
    eat(){
        console.log(this.name + " is a Animal and is eating");
    }
}

class Robot {
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
    
}




let h: Human = new Human("Tom");
let a: Animal = new Animal("Goat");
let r: Robot = new Robot("R2-D2");
let r0: Robot = new Animal("Donkey");//how is this possible?
*/
/* TypeScript is a structural type system which is different from Java, C#, etc. When we compare two different types, regardless of where they came from,
if the types of each member are compatible, then we say the types themselves are compatible. */
/*let h2 = h;
h = a;//both have same properties and methods therefore are compatible
h.eat();
let a2 = a;

let r2 = r;
r = a;//Animal has a name, Robot also has a name
//a = r2;//Error, Robot does not have eat property
console.log("r0");
console.log(r0);
r0 = new Animal("Donkey");

r0.eat()
*/
//var a = 1;
//let a = 1;
/*
var a : number;
function sum(a:number, b : number) : number{
    b = b + 4;
    return 2;
}

var sumResult : string = sum(1,2).toString();

sum(1,<any>"2")
sum(1,2)
*/
/*
const enum Vehicle {
    reverse = 9,
    forward = 8,
    stop = 7,
}

alert(Vehicle.forward); 8
*/
/*

const enum Vehicle {
    reverse = 9,
    forward = 8,
    stop = 7,
}

alert(Vehicle.forward);
*/
//var a : any[] = []
/*
var a : string = "rehan";
a = <any>1;
a = <any>2



var obj = { id : 1, name : "asda" }
obj = <any>{ name : "Student2" }
obj

obj = { id : 1, name : "asda" }
*/
/*var arr : any[] = [1,2];*/
/*
arr = ["a", "b"]

var a = { id : 1, name : "rehan" }
//a = { id : "rehan", name : 1 }

a.id = 2
a.name = "rehanuddin";


a = { id : 2, name : "rehanuddin" }

{ a : 1}
{ a : 1}
*/
