System.register(['angular2/core', 'angular2/router', './../services/AuthService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, AuthService_1;
    var ProtectedComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            }],
        execute: function() {
            ProtectedComponent = (function () {
                function ProtectedComponent() {
                }
                ProtectedComponent = __decorate([
                    core_1.Component({
                        selector: 'protected',
                        template: "<h1>Protected content</h1>"
                    }),
                    router_1.CanActivate(function (nextInstr, currInstr) {
                        console.log("nextInstr");
                        console.log(nextInstr);
                        console.log(currInstr);
                        var injector = core_1.Injector.resolveAndCreate([AuthService_1.AuthService]);
                        var authService = injector.get(AuthService_1.AuthService);
                        return authService.isLogged();
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProtectedComponent);
                return ProtectedComponent;
            })();
            exports_1("ProtectedComponent", ProtectedComponent);
        }
    }
});
//# sourceMappingURL=ProtectedComponent.js.map