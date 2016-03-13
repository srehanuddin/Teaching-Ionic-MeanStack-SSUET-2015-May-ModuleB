import { bootstrap } from "angular2/platform/browser" ;
import { Component } from "angular2/core" ;
import { HTTP_PROVIDERS } from 'angular2/http';
import { Http, Response, RequestOptions, Headers } from 'angular2/http';

import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl } from 'angular2/common';




@Component({
    selector: 'reddit' ,
        host : {
            class : "myClass"
        },
        directives: [FORM_DIRECTIVES],
    template: `
                <div class="ui raised segment">
                <h2 class="ui header">Demo Form: Sku</h2>
                <form (ngSubmit)="onSubmit(myForm.value)" class="ui form" [ngFormModel]="myForm">
                <div class="field" [class.error]="!sku.valid && sku.touched">
                    <label for="skuInput">SKU</label>
                    <input type="text" id="skuInput"  placeholder="SKU" [ngFormControl]="myForm.controls['sku']">
                </div>
                <div class="field">
                    <label for="skuInput">SKU</label>
                    <input type="text" id="skuInput"  placeholder="SKU1" [ngFormControl]="myForm.controls['sku']">
                </div>
                <button type="submit" class="ui button">Submit</button>
                </form>
                </div>
    `
})
class RedditApp {  
    
    myForm: ControlGroup;
    sku: AbstractControl;
    
    
    constructor(public http: Http, fb: FormBuilder){
        this.myForm = fb.group({
            'sku': ['ABC123', Validators.required],
            'sku1': ['ABC123', Validators.required]
        });
        
        this.sku = this.myForm.controls['sku'];
    } 
    
    onSubmit(form: any): void {
        console.log('you submitted value:', form);
    }
    
}

bootstrap(RedditApp, [HTTP_PROVIDERS]);



