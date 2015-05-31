var Vehicle;
(function (Vehicle) {
    Vehicle[Vehicle["reverse"] = 9] = "reverse";
    Vehicle[Vehicle["forward"] = 8] = "forward";
    Vehicle[Vehicle["stop"] = 7] = "stop";
})(Vehicle || (Vehicle = {}));
alert(Vehicle.forward);
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
