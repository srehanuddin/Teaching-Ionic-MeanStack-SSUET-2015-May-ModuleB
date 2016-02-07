System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var form, detail, ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            form = (function () {
                function form() {
                }
                form = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        template: "<h1>form</h1>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], form);
                return form;
            })();
            detail = (function () {
                function detail() {
                }
                detail = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        template: "<h1>detail</h1>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], detail);
                return detail;
            })();
            ContactComponent = (function () {
                function ContactComponent() {
                }
                ContactComponent = __decorate([
                    core_1.Component({
                        template: "<h1>Contact Us</h1>\n  <router-outlet></router-outlet>",
                        directives: [router_1.RouterOutlet]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'CrisisCenter', component: detail, useAsDefault: true },
                        { path: '/Form', name: 'Form', component: form }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ContactComponent);
                return ContactComponent;
            })();
            exports_1("ContactComponent", ContactComponent);
        }
    }
});
//# sourceMappingURL=ContactComponent.js.map