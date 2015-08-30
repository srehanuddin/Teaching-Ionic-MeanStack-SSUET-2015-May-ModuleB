import b = require('./b')

console.log("A File Loaded")

export function a1(){
	
	b.b1();
	console.log("a1 FN called from MOD File")
}

export function a2(){
	
	b.b1();
	console.log("a1 FN called from MOD File")
}
