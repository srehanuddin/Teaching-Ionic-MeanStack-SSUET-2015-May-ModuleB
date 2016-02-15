System.register(["angular2/core", "./../../config", "angular2/router", "./../contact1/contact", "./../contact2/contact"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_1, router_1, contact_1, contact_2;
    var Contact;
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
            function (contact_1_1) {
                contact_1 = contact_1_1;
            },
            function (contact_2_1) {
                contact_2 = contact_2_1;
            }],
        execute: function() {
            Contact = (function () {
                function Contact() {
                }
                Contact = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        templateUrl: config_1.default.componentPath + 'contact/contact.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        //{ path : "/",  redirectTo : ["Home"] },   
                        { path: "/contact1", name: "Contact1", component: contact_1.Contact1, useAsDefault: true },
                        { path: "/contact2", name: "Contact2", component: contact_2.Contact2 }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Contact);
                return Contact;
            })();
            exports_1("Contact", Contact);
        }
    }
});
//# sourceMappingURL=contact.js.map