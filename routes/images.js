var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var fs = require('fs');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../uploads/'))
  },
  filename: function (req, file, cb) {
    cb(null, req.body.id)
  }
});

var upload = multer({ storage: storage });

/* POST upload new image */
router.post('/', upload.single('file'), function(req, res, next) {
  res.json({
    status: 'ok'
  });
});

/* GET image */
router.get('/:id', function (req, res, next) {
  fs.createReadStream(path.join(__dirname, '../uploads/', req.params.id)).pipe(res);
});

module.exports = router;
