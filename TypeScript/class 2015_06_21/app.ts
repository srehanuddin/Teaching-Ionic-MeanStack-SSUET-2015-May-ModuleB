class Animal {
    name:string;
	private my = "SAdsda";
    constructor(theName: string) { this.name = theName; }
    move(meters: number = 0) {
        alert(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(meters = 5) {
        alert("Slithering...");
        super.move(meters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
	private my = "SAdsda";
    move(meters = 45) {
        alert("Galloping...");
        super.move(meters);
    }
}

//var sam = new Snake("Sammy the Python");
var tom: Animal = new Horse("Tommy the Palomino");

//sam.move();
//tom.move(34);