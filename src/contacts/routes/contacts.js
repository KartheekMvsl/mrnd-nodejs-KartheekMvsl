var express = require('express');
var router = express.Router();
var contacts=[];
var i=0;

/* GET contacts */
router.get('/:id', function(req, res, next) {
	//res.json();
	res.statusCode=200;
	res.json(contacts[(req.params.id)]);
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  contacts.push(req.body);
  res.statusCode=200;
  //res.send(req.body);
  res.send(''+i);
  //console.log(i);
  i++;
});

router.put('/:id', function(req, res, next) {
  console.log(req.body);
  contacts[parseInt(req.params.id)].firstName=req.body.firstName;
  res.send(contacts[(req.params.id)]);

});

module.exports = router;
