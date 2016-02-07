System.register(["angular2/core", "./../../config", "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_1, router_1;
    var Todos;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Todos = (function () {
                function Todos(routeParams) {
                    this.routeParams = routeParams;
                    this.todos = ["a", "b", "c"];
                    this.id = routeParams.get("id");
                    this.todo = this.todos[this.id];
                }
                Todos = __decorate([
                    core_1.Component({
                        selector: 'todos',
                        templateUrl: config_1.default.componentPath + 'todos/todos.html',
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _a) || Object])
                ], Todos);
                return Todos;
                var _a;
            })();
            exports_1("Todos", Todos);
        }
    }
});
//# sourceMappingURL=todos.js.map