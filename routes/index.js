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
        copyFile(fields.file, __dirname + fields.file, function (error) {
            if (error) return res.write('Nhu cặc');
            res.write('Như lồn');
        });
        res.end();
    });
});

module.exports = router;
