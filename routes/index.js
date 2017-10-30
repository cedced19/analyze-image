var express = require('express');
var router = express.Router();
var randomstring = require('randomstring');

/* GET home page rooter */
router.get('/', function(req, res, next) {
    res.redirect('/session/' + randomstring.generate(7));
});

/* GET home page for computers */
router.get('/session/:id', function(req, res, next) {
    res.render('index');
});

module.exports = router;
