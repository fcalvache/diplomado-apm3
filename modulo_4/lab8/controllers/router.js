var express = require('express'); // se usa express para poder trabajar la router

var router = express.Router();  

router.get('/', function(req, res){
	res.render('index', {'title' : 'Lab8'});
});

router.get('/contact', function(req, res){
	res.render('contact', {'title' : 'Lab8'});
});

module.exports = router;