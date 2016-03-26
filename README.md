# NodeJS Express Server

NodeJS tabanlı bir alıştırma olup ExpressJS hakkında temel şeyleri göstermek amaçlanmıştır.

Express modülünü projemize dahil ediyoruz ve bir instance yaratıyoruz. Ardından sabit olarak portumuzu 3000 olarak atıyoruz.
```sh
var express = require('express'),
    app     = express();
    
const port = 3000;
```

listen methodu ile sunucumuzu dinleme moduna alıyoruz.
```sh
app.listen(port, function () {
  console.log('Sunucu %s portunu dinliyor!', port);
});
```

app.get() methodu ile routing işlemlerini belirliyoruz. 
Mesela kök dizine bir istek geldiğinde index.html dosyasını, /hakkimizda dizinine istek geldiğinde about.html dosyasını çağırıyoruz.
```sh
app.get('/', function (req, res) {
  console.log('Bir istek geldi!');
  res.sendFile(__dirname + '/index.html');
});

app.get('/hakkimizda', function(req, res) {
  res.sendFile(__dirname + '/about.html');
})
```

Terminal ekranından projenin klasörüne gidip
```sh
node index.js
```
komutu ile projeyi çalıştırabilirsiniz.
