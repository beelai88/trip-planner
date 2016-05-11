var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');

var db = require('./models');

var app = express();

// swig rendering boilerplate
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

// logging and body-parsing
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// statically serve front-end dependencies

 



// serve any other static files
app.use(express.static(__dirname + '/public'));
app.use('/bootstrap', express.static(__dirname + '/bower_components/bootstrap/dist/css/bootstrap.min.css'));
app.use('/jquery', express.static(__dirname + '/bower_components/jquery/dist/jquery.js'));


// serve dynamic routes
app.use(require('./routes'));


// handle any errors
app.use(function (err, req, res, next) {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.render('error', {
  	error: err
  });
});

// listen on a port
var port = 3000;
app.listen(port, function () {
	console.log('The server is listening closely on port', port);
  db.sync()
  .then(function () {
    console.log('Synchronated the database');
  })
  .catch(function (err) {
    console.error('Trouble right here in River City', err, err.stack);
  });
});
