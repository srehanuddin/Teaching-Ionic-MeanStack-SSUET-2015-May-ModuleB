var b = require('./b');
console.log("A File Loaded");
function a1() {
    b.b1();
    console.log("a1 FN called from MOD File");
}
exports.a1 = a1;
function a2() {
    b.b1();
    console.log("a1 FN called from MOD File");
}
exports.a2 = a2;
