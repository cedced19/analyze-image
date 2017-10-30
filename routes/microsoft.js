var express = require('express');
var request = require('request');
var router = express.Router();

/* GET Description with Computer Vision Api */
router.get('/computer-vision/:id', function(req, res, next) {

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


/* GET Description with Face Api */
router.get('/face/:id', function(req, res, next) {

  request.post({
    method: 'POST',
    uri: 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise&returnFaceId=false&returnFaceLandmarks=true&language=en',
    'content-type': 'application/json',
    headers: {
      'Ocp-Apim-Subscription-Key': req.app.get('face_api_key')
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
