var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var abc = (function () {
    function abc() {
    }
    abc.prototype.fn = function () {
        alert(abc.a);
    };
    abc.a = 10;
    return abc;
})();
var a = new abc();
a.fn();
abc.a = 11;
a = new abc();
a.fn();
var RobotHand = (function () {
    function RobotHand() {
    }
    RobotHand.prototype.clap = function () {
    };
    return RobotHand;
})();
var RobotLeftHand = (function (_super) {
    __extends(RobotLeftHand, _super);
    function RobotLeftHand() {
        _super.apply(this, arguments);
    }
    //a = 1;b = 2;c = 3;d = 4;e = 5 ;f = 6;
    RobotLeftHand.prototype.clap = function () {
        console.log("Move Right : RobotLeftHand");
    };
    return RobotLeftHand;
})(RobotHand);
var RobotRightHand = (function (_super) {
    __extends(RobotRightHand, _super);
    function RobotRightHand() {
        _super.apply(this, arguments);
    }
    //a = 1;b = 2;c = 3;d = 4;e = 5 ;f = 6;
    RobotRightHand.prototype.clap = function () {
        console.log("Move Left : RobotRightHand");
    };
    RobotRightHand.prototype.clap1 = function () { };
    return RobotRightHand;
})(RobotHand);
var leftHand = new RobotLeftHand();
var rightHand = new RobotRightHand();
leftHand.clap();
rightHand.clap();
/*


class Human {
    name = "Rehan";
    eat(){
        console.log("Eating in Human");
    }
}
class Student extends Human {
    age = 3;
    eat(){
        console.log("Eating in Student");
    }
}

var h : Human = new Student();
h.eat();
h.name;
*/
/*
class Animal {
    name:string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(meters: number = 0) {
        console.log(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(meters = 5) {
        console.log("Slithering...");
        super.move(meters);
    }
    bite(){
        console.log("bites");
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(meters = 45) {
        alert("Galloping...");
        super.move(meters);
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(meters = 1) {
        alert("Jumping...");
        super.move(meters);
    }
}

let a: Animal = new Snake("Python");
a.move(5);//Snake move method is called not Animals, this is because of polymorphism

let a1: Animal = new Horse("Rocket");
let h: Horse = a1;//no explicit casting needed because has same methods and properties (structural type)

let s1: Snake = <Snake> a;//explicit casting needed because Snake has an additional method bite()

console.log("s1");
console.log(s1);

let h1 : Horse = new Cat("Kitten");//why is this allowed? Because it has same properties and methods (structural type) not because of inheritance
*/
/*
class Human {
    name : string = "Rehan";
    constructor(name:string){
        this.name = name;
        console.log(this.name + " in Student Class");
    }
}

class Student extends Human {
    isStudying : boolean = false;
    constructor(name:string){
        super(name);
        //this.name = name;
    }
}

class UniversityStudent extends Student {
    universityName = "SSUET";
    constructor(name:string){
        super(name);
        //this.name = name;
    }
}

let st1 = new UniversityStudent("Rehan");
console.log(st1);


class Robot{
    name : string = "Rehan";
}
class Animal{
    name;
    eat(){
        
    }
}
class Deer extends Animal{
    name;
    eat(){
        
    }
    sleep(){
        
    }
}

var ob1 = {a : "asdas" }

let a : Animal = new Deer();
a.name;
a.eat();
*/
/*
class Human {
    name : string;
    constructor(name){
        this.name = name
    }
    study(){
        //var e = new English();
        //e.studyBy(this.name);
    }
}

let hArr : Human [] = [];

for(var i = 0; i < 10; i++){
    var tmpObj = new Human((i).toString());
    hArr.push(tmpObj);
}

console.log(hArr);
*/
/*class Human {
    name : string;
    constructor(name){
        this.name = name
    }
    study(){
        var e = new English();
        e.studyBy(this.name);
    }
}

class English {
    subjectName : string;
    studyBy(name){
        console.log("Studying By " + name)
    }
}

var h = new Human("Rehan");
h.study();

*/
