var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var copyFile = require('quickly-copy-file');
var fs = require('fs');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/getname', function (req, res, next) {
    res.send({data: 'ok roi'});
});

router.post('/fileupload', function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        // res.write(files.file.path+":  " + );
        res.send('<img src="uploads/393c4776ca8deb35a2392c2e33e09a0d.jpg"/>');
        res.end();
    });
});

module.exports = router;
