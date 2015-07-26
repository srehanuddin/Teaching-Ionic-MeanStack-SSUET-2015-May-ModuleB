
var passcode = "secret passcod";

class Employeer {
	name : string;
	
	private _fullName: string ="Rehan";
	
    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName.length > 1) {
            this._fullName = newName;
        }
        else {
            console.log("Error: Invalid Length of Employee Name");
        }
    }

	
	protected age : number = 24;
	protected jobHours : number = 8;
	private incometax : number = 5;
	salary(salary){
		return salary - this.incometax
	}
	constructor(n : string){
		this.name = n;
	}
	work(){
		this.age = 30;
		return "Employer Work";
	}
}

class Developer extends Employeer {
	private abc = 10;
	work(){
		this.age;
		return this.name + " : Work is Developement.";
	}
	jobHours = 10;
	calculateSalary(){
		this.salary(1000)
	}
}

new Developer("A")
new Developer("B")

class TeamLead extends Employeer {
	jobHours = 6;
	work(){
		return this.name + " : Work is Technical Leading.";
	}
	calculateSalary(){
		
	}
}

class Manager extends Employeer {
	work(){
		return this.name + " : Work is Managing.";
	}
	calculateSalary(){
		
	}
	jobHours = 2;
}

var Arr : Employeer[] = [
	new Developer("Rehan"),
	new Manager("Zia"),
	new TeamLead("Inam")
];

var html = '<table>';
for(var i = 0; i < Arr.length; i++){
	//Arr[i].jobHours = 10;
	//Arr[i].fullname = "TEst";
	//console.log(Arr[i].fullname);
	
	Arr[i].fullName = "B";
	console.log(Arr[i].fullName);
	
	html += '<tr>';
	html += '<td>' + Arr[i].work() + '</td>';
	html += '</tr>';
}
html += '</table>';

document.write(html);
