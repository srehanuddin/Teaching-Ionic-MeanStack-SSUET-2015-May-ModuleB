import {Injectable} from 'angular2/core';

export class AdItem {
    _id : string;
    Title : string;
    Description : string;
    Price : string;    
    MainImage : string;
}

@Injectable()
export class AdService{
    
    ads : Array<AdItem>;
    
    
    constructor(){
        
        let ads = localStorage.getItem('ads');
        if(ads){
            this.ads = JSON.parse(ads);
        } else {
            this.ads = [];
        }
        
    }
    
    createAdInService(Title, Description, Price, MainImage){
        let tmp : AdItem = {
            _id : (Date.now()).toString(),
            Title : Title,
            Description : Description,
            Price : Price,
            MainImage : MainImage
        }        
        this.ads.push(tmp);
        
        localStorage.setItem("ads", JSON.stringify(this.ads));
    }
    
    getAds(){
        return this.ads;
    }
}

@Injectable()
export class CategoriesService{
    
    categories = [
        "Cars",
        "Cell Phones",
        "Electronics",
        "Laptops",
        "Camera"
    ]
    
    getCategories(){
        return this.categories;
    }
}

