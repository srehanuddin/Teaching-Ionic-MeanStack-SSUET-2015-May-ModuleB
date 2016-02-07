System.register(["angular2/core", "./../../config", "angular2/router", "./../menu/menu", "./../home/home", "./../about/about", "./../todos/todos"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_1, router_1, menu_1, home_1, about_1, todos_1;
    var MyApp;
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
            },
            function (menu_1_1) {
                menu_1 = menu_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (todos_1_1) {
                todos_1 = todos_1_1;
            }],
        execute: function() {
            MyApp = (function () {
                function MyApp() {
                }
                MyApp = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: config_1.default.componentPath + 'main/main.html',
                        directives: [router_1.ROUTER_DIRECTIVES, menu_1.Menu]
                    }),
                    router_1.RouteConfig([
                        //{ path : "/",  redirectTo : ["Home"] },
                        { path: "/home", name: "Home", component: home_1.Home, useAsDefault: true },
                        { path: "/about", name: "About", component: about_1.About },
                        { path: "/todos/:id", name: "Todos", component: todos_1.Todos }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], MyApp);
                return MyApp;
            })();
            exports_1("MyApp", MyApp);
        }
    }
});
//# sourceMappingURL=main.js.map