/*
 * Angular
 */
import {Component} from 'angular2/core';
import {RouterOutlet, RouteConfig} from 'angular2/router'

@Component({
  selector: 'contact',
  template: `<h1>form</h1>`
})
class form {
}

@Component({
  selector: 'contact',
  template: `<h1>detail</h1>`
})
class detail {
}


@Component({
  template: `<h1>Contact Us</h1>
  <router-outlet></router-outlet>`,
  directives: [RouterOutlet]
})
@RouteConfig([
    {path:'/',  name: 'CrisisCenter', component: detail, useAsDefault: true},
  {path:'/Form', name: 'Form', component: form}
])
export class ContactComponent {
}

