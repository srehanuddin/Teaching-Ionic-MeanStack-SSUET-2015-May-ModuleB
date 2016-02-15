System.register(["angular2/core", "./../../config"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_1;
    var Contact1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            Contact1 = (function () {
                function Contact1() {
                }
                Contact1 = __decorate([
                    core_1.Component({
                        selector: 'contact-detail',
                        templateUrl: config_1.default.componentPath + 'contact1/contact.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], Contact1);
                return Contact1;
            })();
            exports_1("Contact1", Contact1);
        }
    }
});
//# sourceMappingURL=contact.js.map