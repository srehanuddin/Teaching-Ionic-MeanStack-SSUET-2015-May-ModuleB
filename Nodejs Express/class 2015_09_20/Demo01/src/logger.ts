export function logger(prefix){
	return function (req,res,next){
		console.log(prefix + ":" + req.url);
		next();
	}
}
