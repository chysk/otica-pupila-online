var express = require('express');
var app = express();
/*
var mongojs = require('mongojs');
var db = mongojs('oculosdb', ['oculosdb']);
var bodyParser = require('body-parser');
*/
app.use(express.static(__dirname + "/public"));
app.get('/*', function(req, res) {
  res.sendfile('public/index.html');
});
/*
app.use(bodyParser.json());

app.get('/oculosdb', function(req, res){
	db.oculosdb.find(function(err, docs){
		res.json(docs);
	});

});

app.post('/oculosdb', function(req, res){
	db.oculosdb.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.delete('/oculosdb/:id', function(req, res){
	var id = req.params.id;
	db.oculosdb.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

app.get('/oculosdb/:id',function(req, res){
	var id = req.params.id;
	db.oculosdb.findOne({_id: mongojs.ObjectId(id)}, function(err,doc){
		res.json(doc);
	});
});

app.put('/oculosdb/:id',function(req, res){
	var id = req.params.id;
	db.oculosdb.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
		new: true}, function(err, doc){
			res.json(doc);
	});
});
*/

app.listen(3000);
console.log("server running on port 3000");