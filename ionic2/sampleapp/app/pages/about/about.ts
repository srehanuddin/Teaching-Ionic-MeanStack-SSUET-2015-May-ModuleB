import {Page, NavController} from 'ionic-angular';

import {HomePage} from '../home/home';

@Page({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
    constructor(public nav: NavController) {
        //this.nav = nav;
    }
    
    gotoHome(){
        this.nav.pop(HomePage);
    }
}
