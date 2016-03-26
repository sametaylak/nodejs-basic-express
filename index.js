var express = require('express'),
    app     = express();
    
    
const port = 3000;
    
app.get('/', function (req, res) {
  console.log('Bir istek geldi!');
  res.sendFile(__dirname + '/index.html');
});


app.get('/hakkimizda', function(req, res) {
  res.sendFile(__dirname + '/about.html');
});

app.listen(port, function () {
  console.log('Sunucu %s portunu dinliyor!', port);
});
