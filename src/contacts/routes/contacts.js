var express = require('express');
var router = express.Router();
var contacts=[];
var i=0;

/* GET contacts */
router.get('/:id', function(req, res, next) {
	res.json(contacts[(req.params.id)]);
});

router.post('/', function(req, res, next) {
  //console.log(req.body);
  contacts.push(req.body);
  res.send(''+i);
  i++;
});

router.put('/:id', function(req, res, next) {
  //console.log(req.body);
  contacts[parseInt(req.params.id)].firstName=req.body.firstName;
  res.send(contacts[(req.params.id)]);

});

router.post('/:id',function(req,res,next){
  var user=contacts[req.params.id];
  console.log(req.body);
  user.message.push(req.body);
  res.send(''+(parseInt(user.message.length)-1));
});

router.get('/:id/mid', function(req, res, next) {
  res.json(contacts[(req.params.id)].message[req.params.mid]);
});

module.exports = router;
