console.log("MOD File Loaded");
var a = require('./a');
var b = require('./b');
console.log("MOD File Loaded Completed");
function mod1() {
    a.a1();
    b.b1();
    //console.log("mod1 FN called from MOD File")
}
exports.mod1 = mod1;
