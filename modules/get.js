var express = require( 'express' );
var bodyParser = require('body-parser');
var router = express.Router();
var path = require( 'path' );
var mongoose = require('mongoose');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

mongoose.connect('localhost:27017/messageBoard');

var messageSchema = new mongoose.Schema({
  name: String,
  message: String
});


var messageModel = mongoose.model('messageModel', messageSchema)

router.get('/message', function(req, res){
  messageModel.find().then(function(data){
    res.send(data)
  })
});

router.post('/post', function(req,res){
  console.log(req.body);

  var dataToAdd = {
  name: req.body.name,
  message: req.body.message
  }
  var newData = messageModel(dataToAdd);
  newData.save();
})




module.exports = router;
