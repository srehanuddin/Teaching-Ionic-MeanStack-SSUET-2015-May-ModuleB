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
    var HelloWorld;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import { NgFor } from "angular2/common" ;
            HelloWorld = (function () {
                function HelloWorld() {
                    this.country = "";
                    this.name = "Reha";
                    this.dt = (new Date()).toString();
                    this.names = [' Ari ', ' Carlos', ' Felipe', ' Nate'];
                    this.persons = [{ name: ' Ari1 ' }, { name: ' Ari2 ' }];
                }
                HelloWorld = __decorate([
                    core_1.Component({
                        selector: 'hello-world',
                        template: "\n        <div>\n        Hello {{name}}\n        <br>\n        {{ 1 + 1 }}\n        <br>\n        {{dt}}\n        \n        <br>\n        \n        <ul>\n            <li *ngFor=\"#n of names\" >\n                \n                Name : <b>{{n}}</b>\n            \n            </li>\n        </ul>\n        \n        <ul>\n            <li *ngFor=\"#n of persons\" >{{n | json}} {{n.name}}\n            </li>\n        </ul>\n        \n        <br>\n        <br>\n        \n        \n        <input type=\"text\" [(ngModel)]=\"country\" />\n        {{country}}\n        \n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelloWorld);
                return HelloWorld;
            })();
            browser_1.bootstrap(HelloWorld);
        }
    }
});
//# sourceMappingURL=app.js.map