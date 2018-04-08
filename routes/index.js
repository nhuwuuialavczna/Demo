var express = require('express');
var router = express.Router();
var formidable =  require('formidable');
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/fileupload',function (req,res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            res.write('File uploaded');
            res.end();
        });
    }
});

module.exports = router;
