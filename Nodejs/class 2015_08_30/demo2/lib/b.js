var a = require('./a');
console.log("B File Loaded");
function b1() {
    a.a1();
    console.log("b1 FN called from MOD File");
}
exports.b1 = b1;
