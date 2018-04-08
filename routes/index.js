var express = require('express');
var router = express.Router();
var formidable =  require('formidable');
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/fileupload',function (req,res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.file.path;
        var newpath =__dirname.substr(0,__dirname.length-6)+ '/uploads/'+files.file.name;
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });
    });
});

module.exports = router;
