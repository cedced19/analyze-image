var express = require('express');
var request = require('request');
var router = express.Router();

/* GET Description with MS Api */
router.get('/:id', function(req, res, next) {

  request.post({
    method: 'POST',
    uri: 'https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Categories,Description,Color,Adult,ImageType,Faces,Tags&details&language=en',
    'content-type': 'application/json',
    headers: {
      'Ocp-Apim-Subscription-Key': req.app.get('computer_vision_api_key')
    },
    body: JSON.stringify({url: req.app.get('address')  + '/api/images/' + req.params.id})
  }, function (error, response, body) {
    res.json({
      error: error,
      body: JSON.parse(body),
      url: req.app.get('address')  + '/api/images/' + req.params.id,
      statusCode: response.statusCode
    });
  });

});

module.exports = router;
