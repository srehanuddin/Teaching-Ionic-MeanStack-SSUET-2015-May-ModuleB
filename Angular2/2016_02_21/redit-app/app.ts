import { bootstrap } from "angular2/platform/browser" ;
import { Component } from "angular2/core" ;
import { HTTP_PROVIDERS } from 'angular2/http';
import { Http, Response, RequestOptions, Headers } from 'angular2/http';
import { FormBuilder, ControlGroup, Validators, AbstractControl } from 'angular2/common';


@Component({
    selector: 'reddit' ,
        host : {
            class : "myClass"
        },
    template: `
<div class="ui raised segment">
    <h2 class="ui header">Demo Form: Sku</h2>
    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)" class="ui form">

        <div class="field" >
            <label for="skuInput">SKU </label>
            <input type="text" id="skuInput" placeholder="SKU" ngControl="sku">
        </div>
        <div class="field">
            <label for="skuInput">SKU</label>
            <input type="text" id="skuInput" placeholder="SKU" ngControl="sku1">
        </div>

        <button type="submit" class="ui button">Submit</button>
    </form>
</div>
    `
})
class RedditApp {  
    
    myForm: ControlGroup;
    sku: AbstractControl;
    
    constructor(public http: Http, public fb: FormBuilder){

        this.myForm =  fb.group({
            'sku': ['ABC123', Validators.required],
            'sku1': ['ABC1234', Validators.required]
        });
        
        console.log(this.myForm.value)
        this.sku = this.myForm.controls['sku'];
        this.sku.updateValueAndValidity("");
    } 
    
    onSubmit(form: any): void {
        console.log('you submitted value:', form);

        this.myForm =  this.fb.group({
            'sku': ['', Validators.required],
            'sku1': ['', Validators.required]
        });
		
    }
    
      
}

bootstrap(RedditApp, [HTTP_PROVIDERS]);

