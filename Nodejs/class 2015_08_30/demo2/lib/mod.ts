
console.log("MOD File Loaded")

import a = require('./a')
import b = require('./b')

console.log("MOD File Loaded Completed")
export function mod1(){
	a.a1();
	b.b1();
	//console.log("mod1 FN called from MOD File")
}
