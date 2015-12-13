console.log("Test");

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test123');

var Cat = mongoose.model('Cat', { name: String, name1 : String });

/*
var myObj = { _id : 1, name: 'Zildjian' }
var kitty = new Cat(myObj);
kitty.save(function (err, data) {
  if (err) // ...
  console.log('meow');
});
*/

Cat.find({ name : "rehan" }, function(err, data){
	console.log(err);
	console.log(data);
	
	data[0].name1 = "test";
	
	data[0].save()
	
	console.log(data[0]);
	
	
});
