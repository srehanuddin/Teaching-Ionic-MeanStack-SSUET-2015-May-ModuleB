/*
 * Angular
 */
System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', './components/HomeComponent', './components/AboutComponent', './components/ContactComponent'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, router_1, HomeComponent_1, AboutComponent_1, ContactComponent_1;
    var RoutesDemoApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (HomeComponent_1_1) {
                HomeComponent_1 = HomeComponent_1_1;
            },
            function (AboutComponent_1_1) {
                AboutComponent_1 = AboutComponent_1_1;
            },
            function (ContactComponent_1_1) {
                ContactComponent_1 = ContactComponent_1_1;
            }],
        execute: function() {
            /*
             * Webpack
             */
            //require('css/styles.scss');
            RoutesDemoApp = (function () {
                function RoutesDemoApp() {
                }
                RoutesDemoApp = __decorate([
                    core_1.Component({
                        selector: 'router-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n  <div>\n    <nav>\n      <a>Navigation:</a>\n      <ul>\n        <li><a [routerLink]=\"['Home']\">Home</a></li>\n        <li><a [routerLink]=\"['/About']\">About</a></li>\n        <li><a [routerLink]=\"['/Contact']\">Contact us</a></li>\n      </ul>\n    </nav>\n\n    <router-outlet></router-outlet>\n  </div>\n  "
                    }),
                    router_1.RouteConfig([
                        //{ path: '/', name: 'root', redirectTo: ['/Home'] },
                        { path: '/home', name: 'Home', component: HomeComponent_1.HomeComponent, useAsDefault: true },
                        { path: '/about', name: 'About', component: AboutComponent_1.AboutComponent },
                        { path: '/contact/...', name: 'Contact', component: ContactComponent_1.ContactComponent },
                        { path: '/contactus', name: 'ContactUs', redirectTo: ['/Contact'] },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], RoutesDemoApp);
                return RoutesDemoApp;
            })();
            browser_1.bootstrap(RoutesDemoApp, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map