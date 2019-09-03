var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');
// var hostname= '0.0.0.0'
// var port = 8080;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("ionic-jwt");
//     var myobj = { name: "Company Inc", address: "Highway 37" };
//     dbo.collection("users").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//     });
// });



app.get('/posts/:email/:pwd', function (req, res) {
    console.log(req.params.email, req.params.pwd)
    if ((req.params.email == "vignesh") && (req.params.pwd == "123")) {
        res.json({ "success": true });
    }
});

app.get('/', function (req, res) {
    res.json({ "success": false });
});

// app.listen(port, hostname, function() {
//     console.log('Example app listening on port... http://'+ hostname + ':' + port);
// });

app.listen(process.env.PORT || 8080);