System.register(['angular2/core', './crisis.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, crisis_service_1, router_1;
    var CrisisListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (crisis_service_1_1) {
                crisis_service_1 = crisis_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CrisisListComponent = (function () {
                function CrisisListComponent(_service, _router, routeParams) {
                    this._service = _service;
                    this._router = _router;
                    this._selectedId = +routeParams.get('id');
                }
                CrisisListComponent.prototype.isSelected = function (crisis) { return crisis.id === this._selectedId; };
                CrisisListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getCrises().then(function (crises) { return _this.crises = crises; });
                };
                CrisisListComponent.prototype.onSelect = function (crisis) {
                    this._router.navigate(['CrisisDetail', { id: crisis.id }]);
                };
                CrisisListComponent = __decorate([
                    core_1.Component({
                        template: "\n    <ul>\n      <li *ngFor=\"#crisis of crises\"\n        [class.selected]=\"isSelected(crisis)\"\n        (click)=\"onSelect(crisis)\">\n        <span class=\"badge\">{{crisis.id}}</span> {{crisis.name}}\n      </li>\n    </ul>\n  ",
                    }), 
                    __metadata('design:paramtypes', [crisis_service_1.CrisisService, router_1.Router, router_1.RouteParams])
                ], CrisisListComponent);
                return CrisisListComponent;
            })();
            exports_1("CrisisListComponent", CrisisListComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=crisis-list.component.js.map