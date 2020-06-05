// npm install express
// npm install request
//npm install ejs

var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('styles'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index')
})

app.get('/requests', function(req, res){
	var query = req.query.mov;
	console.log(query);
	var url = 'http://www.omdbapi.com/?s='+query+'&apikey=thewdb';
	request(url, function(err, response, body){
		if(!err && response.statusCode == 200){
			var data = JSON.parse(body);
			res.render('result', {mov:data});
		}
	})
})

app.listen(3000, function(){
	console.log('Server started on http://127.0.0.1:3000');
})