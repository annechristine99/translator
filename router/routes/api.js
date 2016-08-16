const express = require('express');
const router = express.Router();
var request = require('request');
var pry = require('pryjs')

router.post('/doTranslate', function (req, res){
  var original_text = req.body.data
  var API_KEY = process.env.API_KEY
  var url = "http://api.funtranslations.com/translate/dothraki.json?api_key="+API_KEY+"&text="+original_text

  request(url, function (error, response, body) {
    eval(pry.it)
    if (!error && response.statusCode == 200) {
      res.send(body) // Show the HTML for the Google homepage.
    }
})
  //
});



module.exports = router;
