System.register(["angular2/platform/browser", "angular2/core", 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, http_1, http_2;
    var newTask, taskTable, todoApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            }],
        execute: function() {
            newTask = (function () {
                function newTask(task, desp, status, show) {
                    this.task = task;
                    this.desp = desp;
                    this.status = status;
                    this.show = show;
                    this.id = Date.now();
                }
                newTask.prototype.delete = function () {
                    this.status = false;
                };
                return newTask;
            })();
            taskTable = (function () {
                function taskTable() {
                    this.deleteEvent = new core_1.EventEmitter();
                }
                taskTable.prototype.inactive = function () {
                    this.tasks.status = this.tasks.status ? false : true;
                };
                taskTable.prototype.delete = function () {
                    //this.tasks.show = false;
                    console.log("curTask");
                    console.log(this.tasks);
                    this.deleteEvent.emit(this.tasks);
                };
                taskTable = __decorate([
                    core_1.Component({
                        selector: '.myCom',
                        host: {
                            class: 'td'
                        },
                        inputs: ['tasks'],
                        outputs: ['deleteEvent'],
                        template: "\n\t<td> {{ tasks.task }} </td>\n\t<td> {{ tasks.desp }} </td>\n\t<td><button class=\"ui green button\" *ngIf=\"tasks.status\" (click)=\"inactive()\">Activated</button> <button class=\"ui red button\" *ngIf=\"!tasks.status\"  (click)=\"inactive()\">Unactivated</button></td>\n\t<td><button class=\"ui red button\" (click)=\"delete()\">Remove</button> </td>\t\n\t\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], taskTable);
                return taskTable;
            })();
            //Main Component
            todoApp = (function () {
                function todoApp(http) {
                    this.http = http;
                    this.tasks = [];
                    this.getTodos();
                }
                todoApp.prototype.getTodos = function () {
                    var _this = this;
                    this.loadingTasks = true;
                    this.http.request('http://localhost:3000/api/todo')
                        .subscribe(function (res) {
                        console.log(res.json());
                        setTimeout(function () {
                            _this.tasks = res.json();
                            _this.loadingTasks = false;
                        }, 1000);
                    });
                };
                todoApp.prototype.addTodo = function (task, desp) {
                    var _this = this;
                    console.log("task: " + task.value + " description : " + desp.value);
                    var obj = new newTask(task.value, desp.value, true, true);
                    console.log(obj);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var opts = new http_1.RequestOptions();
                    opts.headers = headers;
                    this.http.post('http://localhost:3000/api/todo', JSON.stringify(obj), opts)
                        .subscribe(function (res) {
                        _this.tasks.push(res.json().todo);
                        task.value = "";
                        desp.value = "";
                    });
                };
                todoApp.prototype.deleteTask = function (task) {
                    var _this = this;
                    this.http.delete('http://localhost:3000/api/todo/' + task.id)
                        .subscribe(function (res) {
                        for (var i = 0; i < _this.tasks.length; i++) {
                            if (_this.tasks[i].id == task.id) {
                                _this.tasks.splice(i, 1);
                                break;
                            }
                        }
                    });
                };
                todoApp.prototype.makeRequest = function () {
                    var _this = this;
                    this.loading = true;
                    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
                        .subscribe(function (res) {
                        console.log(res);
                        console.log(res.json());
                        _this.data = res.json();
                        _this.loading = false;
                    });
                };
                todoApp = __decorate([
                    core_1.Component({
                        selector: 'todoApp',
                        directives: [taskTable],
                        templateUrl: 'TodoApp.html',
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], todoApp);
                return todoApp;
            })();
            browser_1.bootstrap(todoApp, [http_2.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=app.js.map