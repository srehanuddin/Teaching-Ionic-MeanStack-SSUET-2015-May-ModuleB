System.register(["angular2/platform/browser", "angular2/core", 'angularfire2'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, angularfire2_1;
    var RedditApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angularfire2_1_1) {
                angularfire2_1 = angularfire2_1_1;
            }],
        execute: function() {
            RedditApp = (function () {
                function RedditApp(af) {
                }
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        host: {
                            class: "myClass"
                        },
                        template: "    \n        <h1>FireBase Sample App</h1>   \n    "
                    }), 
                    __metadata('design:paramtypes', [angularfire2_1.AngularFire])
                ], RedditApp);
                return RedditApp;
            }());
            browser_1.bootstrap(RedditApp, [
                angularfire2_1.FIREBASE_PROVIDERS,
                angularfire2_1.defaultFirebase('https://angular2-firebase-sample.firebaseio.com'),
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map