import a = require('./a')
console.log("B File Loaded")

export function b1(){
	a.a1()
	console.log("b1 FN called from MOD File")
}
