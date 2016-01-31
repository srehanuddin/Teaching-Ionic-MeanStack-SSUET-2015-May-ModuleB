System.register(["angular2/platform/browser", "angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var newTask, taskTable, todoApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            newTask = (function () {
                function newTask(task, desp, status, show) {
                    this.task = task;
                    this.desp = desp;
                    this.status = status;
                    this.show = show;
                }
                newTask.prototype.delete = function () {
                    this.status = false;
                };
                return newTask;
            })();
            taskTable = (function () {
                function taskTable() {
                }
                taskTable.prototype.inactive = function () {
                    this.tasks.status = this.tasks.status ? false : true;
                };
                taskTable.prototype.delete = function () {
                    this.tasks.show = false;
                };
                taskTable = __decorate([
                    core_1.Component({
                        selector: 'tr',
                        host: {
                            class: 'td'
                        },
                        inputs: ['tasks'],
                        template: "\n\t<td> {{ tasks.task }} </td>\n\t<td> {{ tasks.desp }} </td>\n\t<td><button class=\"ui green button\" *ngIf=\"tasks.status\" (click)=\"inactive()\">Activated</button> <button class=\"ui red button\" *ngIf=\"!tasks.status\"  (click)=\"inactive()\">Unactivated</button></td>\n\t<td><button class=\"ui red button\" (click)=\"delete()\">Remove</button> </td>\t\n\t\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], taskTable);
                return taskTable;
            })();
            //Main Component
            todoApp = (function () {
                function todoApp() {
                    this.tasks = [];
                }
                todoApp.prototype.addTodo = function (task, desp) {
                    console.log("task: " + task.value + " description : " + desp.value);
                    var obj = new newTask(task.value, desp.value, true, true);
                    console.log(obj);
                    this.tasks.push(obj);
                    task.value = "";
                    desp.value = "";
                };
                todoApp = __decorate([
                    core_1.Component({
                        selector: 'todoApp',
                        directives: [taskTable],
                        templateUrl: 'TodoApp.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], todoApp);
                return todoApp;
            })();
            browser_1.bootstrap(todoApp);
        }
    }
});
//# sourceMappingURL=app.js.map