var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

app.set('views', __dirname + '/views');
app.set('layouts', __dirname + '/views/layouts');
app.set('partials', __dirname + '/views/partials');
app.engine('handlebars', exphbs(
   {
     defaultLayout: 'publicLayout',
     layoutsDir: app.settings.layouts,
     partialsDir: app.settings.partials,
     helpers: {
       withVersion: function (url) {
         return url + '?v='+ version;
       },
       withProxyPrefixPath: function(url) {
         return config.full.proxyPrefixPath.uri + url;
       }
     }
   }
));

app.set("view engine", "handlebars");

app.get('/', function (req, res) {
  res.render('index', {
    layout: 'publicLayout'
  });
});
app.get('/headlines', function (req, res) {  res.render('headlines'); });
app.get('/tables', function (req, res) {  res.render('tables'); });
app.get('/text', function (req, res) {  res.render('text'); });
app.get('/forms', function (req, res) { res.render('forms'); });
app.get('/lists', function (req, res) { res.render('lists'); });
app.get('/buttons', function (req, res) { res.render('buttons'); });
app.get('/modals', function (req, res) { res.render('modals'); });
app.get('/messages', function (req, res) { res.render('messages'); });

app.use("/static/css/", express.static(__dirname + "/css")); // local css files
app.use("/static/img/kth-style/", express.static(__dirname + "/img")); // local img files
app.use("/static/js/", express.static(__dirname + "/js")); // local javascript files
app.use("/static/fonts/", express.static(__dirname + "/fonts")); // local font files

app.get('/kth-style/_monitor', function (req, res) {
  res.send('APPLICATION_STATUS: OK');
});

port = process.env.port || 3000
app.listen(port, function () {
  console.log('Application listening on port ' + port);
});
