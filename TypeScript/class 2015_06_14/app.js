/*var a = function(a:string):number{
    
}

var a1 : () => number;

var a2 = (a : string) => {
    alert(1)
    
};
*/
function add(arg1, arg2) {
    //return arg1 + arg2;
    return 1;
}
add("asd", "sadas");
/*
function c(txt){
    alert(txt)
    return 1;
}

function sum(txt1: string, cb : (a : string)=>number){
    txt1 += " World ";
    cb(txt1)
}

sum("Hello ", c)
*/
/*
function calculation(op: string,msg : string, ...restParams:number[]){
console.log(restParams);

var result: number;
if(op == "+"){
    result = 0;
    for(var i = 0; i < restParams.length; i++){
        result += restParams[i];
    }
} else if(op == "*"){
    result = 1;
    for(var i = 0; i < restParams.length; i++){
        result *= restParams[i];
    }
}
alert(msg + result);
}

calculation("+","Sum is ", 1,2,3,4,5,6);
calculation("*","Mul is ", 1,2,3,4,5,6);


function concatStr(...strArgs : string[] ){
alert(strArgs.join("-"));
}
concatStr("a" , "b" , "c");
*/
/*var buildName1 : (firstName: string, lastName?: string) => string =
function(firstName: string, lastName = "Khan") : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
*/
/*
function sum(a,b  ,c = 0,d = 0, e = 0){
    alert("a : " + a)
    alert("b : " + b)
    alert("c : " + c)
    alert("d : " + d)
    alert("e : " + e)
    //return a + b + c + d + e;
}
sum(1,2,null);
sum(1,2);
sum(1,2,3,5,6)
*/
/*
function slider(height = 200, width = 400, bgColor = "blue"){
    alert("height : " + height)
    alert("width : " + width)
    alert("bgColor : " + bgColor)
}

slider(200, 560)
*/
/*var b1 : number;
var b2 : string;
var b3 : boolean;
var b4 : number[];
var b5 : Array<any>;
var a : Function;
let a1 : (b : number)=>number;

a1 = function(a : string):number{
    //alert(a)
    return 1;
}

var myAdd2: (x:number, y:number)=>number =
function(x: number, y: number): number {
    //Anonymous function with type
    return x+y;
};
*/
/*
a1(1)

abc()
function abc (){
    alert(abc)
}
abc()
*/
/*
function Name(fName?: string, lName? : string){
    return fName + lName
}
Name("Rehan", "uddin");
Name("Babar");
*/
/*
function fn2(a? : number, b? : string){
    
}
fn2("sadas")
*/
/*
var num = 1;
num = "asd"
var a2 = function(){return 1}
a = function(){return 1};
a()
a = function(a){return "2"}
a()

var fn1 = function():number{}
fn1 = function(){}

var obj = {id : 1, name : "Rehan"}
obj = {id : "@1"}

*/
/*
a();
var a = function (a1 , a2){
    return a1
}
var b = 1;

a(1,2)

a = null;
*/
/*var a:number

var b : string = "asdas"
b = <any>1;
b = <any>2;
*/
/*
var c:number = Number("sdasd");
c = 2
c = "ASdas";
c = true;
*/
/*
function fn1(a:number,b:number):string{
    var returnVar : string = <any>(a + b)
    return returnVar
}

var fnReturn = fn1(1,1);
//fnReturn = "3"

var calc : number = fnReturn + 1;
*/
/*const enum doorState {
    open,
    close,
    state1 = 10,
    state2
}
console.log(doorState.open);
*/
/*
enum doorState {
    A = 0
}
var doors = [
    { name : "Asdas", state : 0}
    ]
var doors = [doorState,doorState,doorState]



doorState[doors[0].state]

enum AD {
    pending = 0,
    approved = 1,
    blocked = 2,
    deletedByAdmin = 3,
    deletedByUser = 3
}
console.log(doorState);
*/
/*

var StateObj = {
    close : 0,
    open : 1
}
*/
var arr = [1, 2];
arr = [1, "asd"];
/*
let a = 2;
if(false){
    a = 1
}
a
*/
/*let myType = { name: "Zia", id: 1 };
myType = { id: 2,  name: "Tom" };// can only assign a type which has the at least the same properties
myType = { id: 3,  name: "Mike", gender: false };//can add a property
*/
/*let b : any = {}
let c : any [] = []

let a :number[]=  [1, 3, 2]

a = [1,2,<any>"dsfsdf"]
a = [1,2,3]


console.log(a[2]);
*/
/*let a = { id : 1 , name : "Rehan"}
//a = 34324
a = <any>{  name : "Rehan", name2 : "sadasd"};
a["lastName"] = "Uddin"

console.log(a);
*/
/*let a = 1;
let a_1 = 3;
if(true){
    let a = 2;
}
*/
//console.log(a)
/*//let num = 2;
if(true){
    let result = 0;
    let num = 1;
    let num1 = 10;
    result = num + num1;
    console.log(result);
}
let newResult = num + 3;
console.log("num => " + num);
*/
/*
var conType;
var data = prompt("Enter Value");
if(data =="a"){
    conType = "string"
} else {
    conType = 1;
}
conType = 5;
const con : number = conType;
conType = "contype";

con
conType

var pi : any = 1;

pi = "asdas"

const fn1 = function(a:number):number{
    return a + 2;
}

const a = []
a.push(1)
fn1(1)
fn1(2)

var fn2 = function(){
    return 1+2;
}
fn2 = function(){
    return 2+2;
}

var variable;

var b = a + 1;
console.log(a);
*/
/*
console.log("Hello World");
*/
/*
var a : number = 1;

var bool : boolean = true;

bool = false;
bool = true;
bool = false;
bool = true;

a = null;
a = 2;

var b = a + 2;

*/ 
