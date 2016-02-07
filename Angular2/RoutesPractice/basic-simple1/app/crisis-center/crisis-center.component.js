System.register(['angular2/core', 'angular2/router', './crisis-list.component', './crisis-detail.component', './crisis.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, crisis_list_component_1, crisis_detail_component_1, crisis_service_1;
    var CrisisCenterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (crisis_list_component_1_1) {
                crisis_list_component_1 = crisis_list_component_1_1;
            },
            function (crisis_detail_component_1_1) {
                crisis_detail_component_1 = crisis_detail_component_1_1;
            },
            function (crisis_service_1_1) {
                crisis_service_1 = crisis_service_1_1;
            }],
        execute: function() {
            CrisisCenterComponent = (function () {
                function CrisisCenterComponent() {
                }
                CrisisCenterComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h2>CRISIS CENTER</h2>\n    <router-outlet></router-outlet>\n  ",
                        directives: [router_1.RouterOutlet],
                        providers: [crisis_service_1.CrisisService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'CrisisCenter', component: crisis_list_component_1.CrisisListComponent, useAsDefault: true },
                        { path: '/:id', name: 'CrisisDetail', component: crisis_detail_component_1.CrisisDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], CrisisCenterComponent);
                return CrisisCenterComponent;
            })();
            exports_1("CrisisCenterComponent", CrisisCenterComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=crisis-center.component.js.map