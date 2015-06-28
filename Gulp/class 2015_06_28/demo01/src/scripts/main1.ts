class Human {
	name : string;
	age : number;
	private abc : string;
	
	constructor(name : string, age : number){
		this.name = name;
		this.age = age;
	}
}

class Mahajir extends Human {
	
}

var h1 : Human = new Human("Rehan", 24);
h1 = new Mahajir("Rehan", 24);