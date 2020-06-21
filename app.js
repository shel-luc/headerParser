
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
    res.redirect('/api/whoami');
});

app.get('/api/whoami', (req, res) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    var language = req.headers['accept-language'].split(',')[0];
    
    var regexp = /\(([^()]*)\)/g;
    var software = regexp.exec(req.headers['user-agent'])[1];
    var data = {
        ip: ip,
        language: language,
        software: software,
    }
    res.json(data);
});
app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
