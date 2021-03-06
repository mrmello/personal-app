var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/airhorn/app'));
app.set('views', __dirname + '/airhorn/app');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('/airhorn/app/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
