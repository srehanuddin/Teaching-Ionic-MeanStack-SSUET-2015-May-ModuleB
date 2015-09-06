import express = require('express');
var viewRenderingEngine = require("ejs");

var app : express.Express = express();

app.set('view engine', 'ejs'); // so you can render('index') 
app.set('views' , "./views")

app.get('/', (req, res) => {
	res.render('index');  
}); 

app.listen(port, function(){
	console.log("Listening")
});


var port: number = process.env.PORT || 3000;
var server = app.listen(port, () => {
	var listeningPort: number = server.address().port;
	console.log('The server is listening on port: ' + listeningPort);
});
