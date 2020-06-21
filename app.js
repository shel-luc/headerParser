

const express = require('express');

const port = process.env.PORT || 3000;

var app = express();

app.get('/', (req, res) => {
  var result = {};
  result.ipaddress = req.ip.match(/\d+\.\d+\.\d+\.\d+/)[0];
  result.language = req.acceptsLanguages()[0];
  result.software = req.get('user-agent').match(/\((.+?)\)/)[1];
  //console.log(req.ip);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}.`);
});
