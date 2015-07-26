var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var passcode = "secret passcod";
var Employeer = (function () {
    function Employeer(n) {
        this._fullName = "Rehan";
        this.age = 24;
        this.jobHours = 8;
        this.incometax = 5;
        this.name = n;
    }
    Object.defineProperty(Employeer.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (newName.length > 1) {
                this._fullName = newName;
            }
            else {
                console.log("Error: Invalid Length of Employee Name");
            }
        },
        enumerable: true,
        configurable: true
    });
    Employeer.prototype.salary = function (salary) {
        return salary - this.incometax;
    };
    Employeer.prototype.work = function () {
        this.age = 30;
        return "Employer Work";
    };
    return Employeer;
})();
var Developer = (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        _super.apply(this, arguments);
        this.abc = 10;
        this.jobHours = 10;
    }
    Developer.prototype.work = function () {
        this.age;
        return this.name + " : Work is Developement.";
    };
    Developer.prototype.calculateSalary = function () {
        this.salary(1000);
    };
    return Developer;
})(Employeer);
new Developer("A");
new Developer("B");
var TeamLead = (function (_super) {
    __extends(TeamLead, _super);
    function TeamLead() {
        _super.apply(this, arguments);
        this.jobHours = 6;
    }
    TeamLead.prototype.work = function () {
        return this.name + " : Work is Technical Leading.";
    };
    TeamLead.prototype.calculateSalary = function () {
    };
    return TeamLead;
})(Employeer);
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        _super.apply(this, arguments);
        this.jobHours = 2;
    }
    Manager.prototype.work = function () {
        return this.name + " : Work is Managing.";
    };
    Manager.prototype.calculateSalary = function () {
    };
    return Manager;
})(Employeer);
var Arr = [
    new Developer("Rehan"),
    new Manager("Zia"),
    new TeamLead("Inam")
];
var html = '<table>';
for (var i = 0; i < Arr.length; i++) {
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
