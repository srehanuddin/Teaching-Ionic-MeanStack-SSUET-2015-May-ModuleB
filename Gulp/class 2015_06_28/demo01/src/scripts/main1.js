var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Human = (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    return Human;
})();
var Mahajir = (function (_super) {
    __extends(Mahajir, _super);
    function Mahajir() {
        _super.apply(this, arguments);
    }
    return Mahajir;
})(Human);
var h1 = new Human("Rehan", 24);
h1 = new Mahajir("Rehan", 24);
{
    var a = 1;
}
