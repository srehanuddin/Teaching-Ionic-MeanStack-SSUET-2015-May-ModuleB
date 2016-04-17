import {Page, NavController} from 'ionic-angular';

//PAGES
import {AdAddPage}  from './../ad_add/ad_add';
import {SearchPage}  from './../search/search';
import {AdsPage}  from './../ads/ads';

//Services 
import {AdService, CategoriesService} from './../../services/app.services';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    
  //Pages
  _AdAddPage = AdAddPage;
  _SearchPage = SearchPage;
  
  category = false;
  categories: string[];
  
  constructor(
      public nav : NavController, 
      public _AdService : AdService,
      public _CategoriesService : CategoriesService
      ) {
      
      this.categories = this._CategoriesService.getCategories();
  }
  
  categoryToggle(){
      console.log(this.category)
      this.category = this.category ? false : true;
  }
  
  gotoPage(page){
      this.nav.push(page);
  }
  
  gotoAdsPage(category){
      console.log(category);
      this.nav.push(AdsPage);
  }
  

}
