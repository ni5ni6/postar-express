var express = require('express');
var router = express.Router();
	

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upit', function(req, res, next){

	yaml = require('js-yaml');
	fs   = require('fs');

	// Get document, or throw exception on error
	try {
	  var doc = yaml.safeLoad(fs.readFileSync('categories.yaml', 'utf8'));
	  console.log(doc);
	  res.render('upit', {data: doc});
	} catch (e) {
	  console.log(e);
	}
});

module.exports = router;
