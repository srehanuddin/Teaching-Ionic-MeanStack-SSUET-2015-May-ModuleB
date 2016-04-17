import {Page, NavController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/search/search.html'
})
export class SearchPage {
  category = false;

  
  categories = [
      "Cars",
      "Cell Phones",
      "Electronics",
      "Laptops",
      "Camera"
  ]
  
  constructor(public nav : NavController) {

  }
  
  categoryToggle(){
      console.log(this.category)
      this.category = this.category ? false : true;
  }
  
  gotoPage(page){
      this.nav.push(page);
  }
  
  
  
}
