import { bootstrap } from "angular2/platform/browser" ;
import { Component } from "angular2/core" ;



@Component({
    selector: 'reddit-article',
        host: {
            class: 'row'
        },
        inputs: [ 'article' ],
    template: `
        <div class="four wide column center aligned votes" >
 <div class="ui statistic" >
 <div class="value" >
 {{ article.votes }}
 </div>
 <div class="label" >
 Points
 </div>
 </div>
 </div>
 <div class="twelve wide column" >
 <a class="ui large header" href=" {{ article.link }} " >
 {{ article.title }}<br>
 {{ article.link }}
 </a>
 <ul class="ui big horizontal list voters" >
 <li class="item" >
 <a  (click) ="voteUp() " >
 <i class="arrow up icon" > </i>
 upvote
 </a>
 </li>
 <li class="item" >
 <a  (click) ="voteDown() " >
 <i class="arrow down icon" > </i>
 downvote
 </a>
 </li>
 </ul>
 </div>
 `
 })
 class ArticleComponent {
    article: Article
    
    constructor() {
        
        //this. article = new Article( 'Angular 2' , 'http://angular.io' , 10);
    }
    
    voteUp() {
        this.article.voteUp();
        return false;
    }

    voteDown() {
        this.article.voteDown();
        return false;
    }
 }
 
 


@Component({
    selector: 'reddit' ,
        host : {
            class : "myClass"
        },
        directives : [ArticleComponent],
    template: `
    <form class=" ui large form segment" >
        <div class="{{class}}">{{class}}</div>
        
        <h3 class=" ui header" > Add a Link</h3>

        <div class=" field" >
            <label for=" title" > Title: </label >
            <input name=" title" #newtitle >
        </div>
        <div class=" field" >
            <label for=" link" > Link: </label >
            <input name=" link" #newlink >
        </div>
        <button (click)="addArticle(newtitle, newlink)" class=" ui positive right floated button" >
            Submit link
        </button>
        
    </form>
    
    <div class="ui grid posts" >
        <!--<reddit-article [article]="art1" > Loading.. </reddit-article>
        <reddit-article [article]="art2" > Loading.. </reddit-article>
        <reddit-article [article]="art3" > Loading.. </reddit-article>
        <reddit-article [article]="art3" > Loading.. </reddit-article>
        -->
        
        <!--
        <ul>
        
            <li *ngFor="#a of articles" >
                <div>            {{a.title}}
                </div>
                </li>
        </ul>
        -->
        
        <reddit-article *ngFor="#a of articles" [article]="a" > Loading.. </reddit-article>
        
        
        <div>
            <span *ngIf="isShow">ABC</span>
            
            <button (click)="toggle()">Show/Hide</button>
            
            
            <ul>
                <div *ngFor="#d of arr"  [style.color]="'blue'" [style.background-color]="color" >
                    <li *ngIf="d.status">{{d.title}}<button (click)="disabled(d.title)">Hide</button></li>
                </div>
            </ul>
            
            <ul>
                <div *ngFor="#d of arr ; #num=index"  [ngStyle]="styleObj"   >
                    {{num}}
                    <li *ngIf="d.status">{{d.title}}<button (click)="disabled(d.title)">Hide</button></li>
                </div>
            </ul>
            
            
            
        </div>
        
        
        
        <div class="ui input" >
            <input type="text" name="color" value="{{color}}" #colorinput>
        </div>

<div class="ui input" >
<input type="text" name="fontSize" [(ngModel)]="fontSize" value="{{fontSize}}" #fontinput>
{{fontSize}}
</div>

<div [ngClass] ="{bordered: false, success : status, failure : !status} ">
<span [ngStyle] =" { color: 'red' } " [style.font-size.px] ="fontSize" >
red text
</span>
</div>

        
    </div>
    
    
    
    
    `
})
class RedditApp {  
    
    color  = "red";
    arr = [
        { title : 1, status : true},
        { title : 2, status : false},
        { title : 3, status : true},
        { title : 4, status : true},
        { title : 5, status : true},
        { title : 6, status : true},
    ];
    
    styleObj = { color: 'white' , 'background-color' : 'blue' };
    
    disabled(title){
        console.log(title)
        
        for(var i=0; i < this.arr.length; i++){
            if(this.arr[i].title == title){
                this.arr[i].status = false;
                break;
            }
        }
    }
    
    class = "red";
    
    isShow = true;
    
    articles: Article[];
    
    toggle(){
        this.isShow = this.isShow ? false : true;
    }
    
    //art1 = new Article('Angular 2', 'http://angular.io', 3);
    //art2 = new Article('Fullstack', 'http://fullstack.io', 2);
    //art3 = new Article('Angular Homepage', 'http://angular.io', 1);
    
    
    constructor(){
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fullstack', 'http://fullstack.io', 2),
            new Article('Angular Homepage', 'http://angular.io', 1),
        ];
    }  
    addArticle(title : HTMLInputElement , link : HTMLInputElement): void {
       this.class = "green";
       console.log(`Adding article title: ${title.value} and link: ${link. value} `);
   
        this.articles.push(
            new Article(title.value, link.value, 0)
        );

    }  
}

bootstrap(RedditApp);




class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this. title = title;
        this. link = link;
        this. votes = votes || 0;
    }
    
    voteUp( ) : void {
        this. votes += 1 ;
    }

    voteDown( ) : void {
        this. votes -= 1 ;
    }
    
}
