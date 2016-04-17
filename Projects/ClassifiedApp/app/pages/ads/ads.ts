import {Page, NavController} from 'ionic-angular';

//Services 
import {AdService, AdItem} from './../../services/app.services';

@Page({
  templateUrl: 'build/pages/ads/ads.html'
})
export class AdsPage {
  
  ads : Array<AdItem>;
  
  constructor(public nav : NavController, public _AdService : AdService) {
    this.ads = this._AdService.getAds();
    
    console.log(this.ads);
  }
  
  
}
