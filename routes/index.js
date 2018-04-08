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
        var file = files.file;
        var path = file.path;
        var newpath = __dirname.substr(0,__dirname.length-6)+'\\'+file.name;

        fs.rename(path, newpath, function (err) {
            if (err) throw err;
            res.end('Upload Thanh cong!');
        });

        res.end();
    });
});

function copyFile(source, target, cb) {
    var cbCalled = false;

    var rd = fs.createReadStream(source);
    rd.on("error", function (err) {
        done(err);
    });
    var wr = fs.createWriteStream(target);
    wr.on("error", function (err) {
        done(err);
    });
    wr.on("close", function (ex) {
        done();
    });
    rd.pipe(wr);

    function done(err) {
        if (!cbCalled) {
            cb(err);
            cbCalled = true;
        }
    }
}

module.exports = router;
