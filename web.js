/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var games = require('./routes/games');
var ejs = require('ejs');
var path = require('path');
var expressLayout = require('express3-ejs-layout');

var app = express();

// all environments

//app.configure('dev', function() {
  //app.set('view cache', true);
//});

app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('layout', 'layout');
app.use(expressLayout);
app.use(express.favicon());
app.use(express.logger());
//app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

//app.set('view options', {SITE_URL: hostname});

// development only
//if ('development' == app.get('env')) {
  app.use(express.errorHandler());
//}

app.get('/', routes.index);
app.get('/games', games.list);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
