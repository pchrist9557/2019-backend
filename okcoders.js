var express = require('express');
var router = express.Router();

router.get('/', function(){
    res.render('layout', {title: 'Okcoders 2019', content: 'Welcome to Okcoders 2019'});
});

router.get('/instructors', function(req,res) {
    res.json({instructors: ['Zack', 'Carson', 'Bob', 'Trae']});
});

module.exports = router;
