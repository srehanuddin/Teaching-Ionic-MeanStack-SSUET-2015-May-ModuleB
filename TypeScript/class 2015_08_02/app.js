var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        console.log(d);
        this.currentTime = d;
    };
    return Clock;
})();
var obj = new Clock(1, 1);
obj.setTime(new Date());
/*
interface Dictionary {
  [index: string]: number;
}

interface StringArray {
  [index: number]: string;
  length: number;
}

[
    {name : "Rehan"},
    {name : "Zia"},
]

{
    name : "Rehan",
    age : 24
}

data[0] = "Rehan";
data[1] = 24

let myDictionary: Dictionary = {"first": "Bob", "second": "Fred"};

var first = myDictionary["first"];



var myArr : number [] = []

//It is possible to support both types of index,
//with the restriction that the type returned from the numeric index must be a subtype of the type returned from the string index.

//While index signatures are a powerful way to describe the array and 'dictionary' pattern,
//they also enforce that all properties match their return type. In this example,
//the property does not match the more general index, and the type-checker gives an error:

interface AnotherDictionary {
  [index: string]: string;
  length: number;    // error, the type of 'length' is not a subtype of the indexer
}

*/
/*
var arr1 : number [];
var arr2 : Array<number>;

type arrayType = number [];

interface StringArray {
  [index: number]: string;
  length: number;
}

let myArray: StringArray = ["Bob", "Fred"];
myArray.length;
var first = myArray[0];
*/
/*
var myFN : Function;

myFN = function(){};

var MyFn2 : (a : number, b : number)=>number;
MyFn2 = function(a : number, b : number){
    return a + b;
};

interface SearchFunc {
  (a : number, b : number):number;
}



var myFn4 : SearchFunc = function(a : number, b : number){
    return a + b;
};

type myFNType =  (a : number, b : number)=>number
*/
/*
myFn();
var myFn = function (name? : string){
    alert(1);
}
myFn();

var obj : { age? : number, name : string } = { name : "Rehan" };

interface myObjInterface {
    age? : number;
    name : string;
}

class myObjClass implements myObjInterface {
    name : string;
}

var obj1 : myObjInterface;
obj1 = {name : "Rehan"}
*/
/*
function printLabel(labelledObj: {label: string}) {
  console.log(labelledObj.label);
}

var myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//Note: Notice that our object actually has more properties than this,
//but the compiler only checks to that at least the ones required are present and match the types required.

//**************************************************************

//Same Example with a named interface

interface LabelledValue {
  label: string;
}

function printLabel1(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

var myObj = {size: 10, label: "Size 10 Object"};
printLabel1(myObj);
*/
/*
//var a : { name : string, age : number};
//interface

type myType = { name : string, age : number};
var a : myType | boolean;

interface myObjInterface {
    name : string;
    age : number;
}

var obj2 : myObjInterface;

obj2.age = 10;
obj2.name = "123";

//obj2 = { name : "rehan"};

class myObjClass implements myObjInterface {
    name : string;
    age : number;
}


var obj1 : { name : string, age : number};

obj1 = { name : "rehan", age : 24, ako : 1};

*/
/*
interface humanInterface {
    name : string;
    age : number;
    sleep (hours : number) : void;
}

class Human implements humanInterface {
    name : string = "asd";
    age : number = 1;;
    sleep(hours : number){
        console.log(hours )
    }
    
    eat(){
        
    }
}
*/
/*
class MathClass {
    static sum(a : number, b : number) : number{
        return a + b;
    };
    static sub(a : number, b : number) : number{
        return a - b;
    };
}
MathClass.sum(1,2);
*/
/*
class Employee {
    name : string;
    salary : number;
    static incomeTaxInPercent : number = 10;
    get _incomeTaxInPercent(){
        return Employee.incomeTaxInPercent;
    }
    
    constructor(name : string, salary : number){
        this.name = name;
        this.salary = salary;
    }
    calculateSalary(){
        let empSalary = this.salary - ((this.salary / 100) * Employee.incomeTaxInPercent);
        console.log(this.name + " Net Salary is : " + empSalary);
    }
}

var emp1 = new Employee("Employee 1", 10000);
var emp2 = new Employee("Employee 2", 10000);
emp1.calculateSalary();
emp2.calculateSalary();
Employee.incomeTaxInPercent = 20;
emp1.calculateSalary();
emp2.calculateSalary();
*/
/*
class config {
    static DBUrl = "DBUserPass";
    static DBUrl1= "DBUserPass";
    innerConfig = "Asdas";
}

var con = new config();
con.innerConfig;

class DBConnection {
    connectDB(){
        //make connection
        config.DBUrl;
    }
}
*/
/*
class Human{
    name = "Rehan";
    static age = 24;
}

alert(Human.age);
*/
//var h = new Human();
//h.age; 
