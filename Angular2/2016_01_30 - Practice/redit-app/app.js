System.register(["angular2/platform/browser", "angular2/core", 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, http_1, http_2;
    var ArticleComponent, RedditApp, Article;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            }],
        execute: function() {
            ArticleComponent = (function () {
                function ArticleComponent() {
                    //this. article = new Article( 'Angular 2' , 'http://angular.io' , 10);
                }
                ArticleComponent.prototype.voteUp = function () {
                    this.article.voteUp();
                    return false;
                };
                ArticleComponent.prototype.voteDown = function () {
                    this.article.voteDown();
                    return false;
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'reddit-article',
                        host: {
                            class: 'row'
                        },
                        inputs: ['article'],
                        template: "\n        <div class=\"four wide column center aligned votes\" >\n <div class=\"ui statistic\" >\n <div class=\"value\" >\n {{ article.votes }}\n </div>\n <div class=\"label\" >\n Points\n </div>\n </div>\n </div>\n <div class=\"twelve wide column\" >\n <a class=\"ui large header\" href=\" {{ article.link }} \" >\n {{ article.title }}<br>\n {{ article.link }}\n </a>\n <ul class=\"ui big horizontal list voters\" >\n <li class=\"item\" >\n <a  (click) =\"voteUp() \" >\n <i class=\"arrow up icon\" > </i>\n upvote\n </a>\n </li>\n <li class=\"item\" >\n <a  (click) =\"voteDown() \" >\n <i class=\"arrow down icon\" > </i>\n downvote\n </a>\n </li>\n </ul>\n </div>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            })();
            RedditApp = (function () {
                function RedditApp(http) {
                    this.http = http;
                    this.color = "red";
                    this.arr = [
                        { title: 1, status: true },
                        { title: 2, status: false },
                        { title: 3, status: true },
                        { title: 4, status: true },
                        { title: 5, status: true },
                        { title: 6, status: true },
                    ];
                    this.styleObj = { color: 'white', 'background-color': 'blue' };
                    this.class = "red";
                    this.isShow = true;
                    this.articles = [
                        new Article('Angular 2', 'http://angular.io', 3),
                        new Article('Fullstack', 'http://fullstack.io', 2),
                        new Article('Angular Homepage', 'http://angular.io', 1),
                    ];
                }
                RedditApp.prototype.disabled = function (title) {
                    console.log(title);
                    for (var i = 0; i < this.arr.length; i++) {
                        if (this.arr[i].title == title) {
                            this.arr[i].status = false;
                            break;
                        }
                    }
                };
                RedditApp.prototype.toggle = function () {
                    this.isShow = this.isShow ? false : true;
                };
                RedditApp.prototype.makeRequest = function () {
                    var _this = this;
                    this.loading = true;
                    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
                        .subscribe(function (res) {
                        _this.data = res.json();
                        _this.loading = false;
                    });
                };
                RedditApp.prototype.addArticle = function (title, link) {
                    this.class = "green";
                    console.log("Adding article title: " + title.value + " and link: " + link.value + " ");
                    this.articles.push(new Article(title.value, link.value, 0));
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        host: {
                            class: "myClass"
                        },
                        directives: [ArticleComponent],
                        template: "\n    <form class=\" ui large form segment\" >\n        <div class=\"{{class}}\">{{class}}</div>\n        \n        <h3 class=\" ui header\" > Add a Link</h3>\n\n        <div class=\" field\" >\n            <label for=\" title\" > Title: </label >\n            <input name=\" title\" #newtitle >\n        </div>\n        <div class=\" field\" >\n            <label for=\" link\" > Link: </label >\n            <input name=\" link\" #newlink >\n        </div>\n        <button (click)=\"addArticle(newtitle, newlink)\" class=\" ui positive right floated button\" >\n            Submit link\n        </button>\n        \n    </form>\n    \n    <div class=\"ui grid posts\" >\n        <!--<reddit-article [article]=\"art1\" > Loading.. </reddit-article>\n        <reddit-article [article]=\"art2\" > Loading.. </reddit-article>\n        <reddit-article [article]=\"art3\" > Loading.. </reddit-article>\n        <reddit-article [article]=\"art3\" > Loading.. </reddit-article>\n        -->\n        \n        <!--\n        <ul>\n        \n            <li *ngFor=\"#a of articles\" >\n                <div>            {{a.title}}\n                </div>\n                </li>\n        </ul>\n        -->\n        \n        <reddit-article *ngFor=\"#a of articles\" [article]=\"a\" > Loading.. </reddit-article>\n        \n        \n        <div>\n            <span *ngIf=\"isShow\">ABC</span>\n            \n            <button (click)=\"toggle()\">Show/Hide</button>\n            \n            \n            <ul>\n                <div *ngFor=\"#d of arr\"  [style.color]=\"'blue'\" [style.background-color]=\"color\" >\n                    <li *ngIf=\"d.status\">{{d.title}}<button (click)=\"disabled(d.title)\">Hide</button></li>\n                </div>\n            </ul>\n            \n            <ul>\n                <div *ngFor=\"#d of arr ; #num=index\"  [ngStyle]=\"styleObj\"   >\n                    {{num}}\n                    <li *ngIf=\"d.status\">{{d.title}}<button (click)=\"disabled(d.title)\">Hide</button></li>\n                </div>\n            </ul>\n            \n            \n            \n        </div>\n        \n        \n        \n        <div class=\"ui input\" >\n            <input type=\"text\" name=\"color\" value=\"{{color}}\" #colorinput>\n        </div>\n\n<div class=\"ui input\" >\n<input type=\"text\" name=\"fontSize\" [(ngModel)]=\"fontSize\" value=\"{{fontSize}}\" #fontinput>\n{{fontSize}}\n</div>\n\n<div [ngClass] =\"{bordered: false, success : status, failure : !status} \">\n<span [ngStyle] =\" { color: 'red' } \" [style.font-size.px] =\"fontSize\" >\nred text\n</span>\n</div>\n\n\n<h2>Basic Request</h2>\n<button type=\"button\" (click)=\"makeRequest()\">Make Request</button>\n<div *ngIf=\"loading\">loading...</div>\n<pre>{{data | json}}</pre>\n        \n    </div>\n    \n    \n    \n    \n    "
                    }), 
                    __metadata('design:paramtypes', [http_2.Http])
                ], RedditApp);
                return RedditApp;
            })();
            browser_1.bootstrap(RedditApp, [http_1.HTTP_PROVIDERS]);
            Article = (function () {
                function Article(title, link, votes) {
                    this.title = title;
                    this.link = link;
                    this.votes = votes || 0;
                }
                Article.prototype.voteUp = function () {
                    this.votes += 1;
                };
                Article.prototype.voteDown = function () {
                    this.votes -= 1;
                };
                return Article;
            })();
        }
    }
});
//# sourceMappingURL=app.js.map