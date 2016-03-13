System.register(['angular2/core', 'angular2/common', 'angular2/platform/browser'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, browser_1;
    var validating;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            validating = (function () {
                //dependency inj.
                function validating(fb) {
                    this.cg = fb.group({
                        'input1': ['ABC', common_1.Validators.required],
                        'input2': ['DEF', common_1.Validators.required]
                    });
                    this.input1 = this.cg.controls['input1'];
                    this.input2 = this.cg.controls['input2'];
                }
                //what about 2 values
                validating.prototype.onSubmit = function (value) {
                    console.log('onSubmit Function called' + value);
                };
                validating = __decorate([
                    core_1.Component({
                        selector: 'validating',
                        template: "\n    \n    <h1>Form Validation<h1>\n    \n    <form  [ngFormModel] = 'cg' (ngSubmit) = 'onSubmit(cg.value)' class = \"form-inline\">\n    \n    <div class = \"form-group \" \n    [class.has-error] = \"!input1.valid && input1.touched\"\n    [class.has-success] = \"input1.valid && input1.touched\"\n    >\n    <lable>Name</lable>\n    <input type = 'text' [ngFormControl] = 'input1' class = \"form-control \" #j />\n    {{j}}\n    </div>\n    \n    \n    <div class = \"form-group\" [class.has-error] = \"!input2.valid && input2.touched\"\n    [class.has-success] = \"input2.valid && input2.touched\"\n    >\n    <lable>Last Name:</lable>\n    <input type = 'text' [ngFormControl] = 'input2' class = \"form-control\"  #i />\n    {{i}}\n    </div>\n    \n    <button type = 'submit'>Submit</button>\n    </form>\n    \n    ",
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], validating);
                return validating;
            })();
            exports_1("validating", validating);
            browser_1.bootstrap(validating);
        }
    }
});
//# sourceMappingURL=validating.js.map