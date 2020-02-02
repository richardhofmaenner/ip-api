const express = require('express');

const app = express();
app.set('trust proxy', true);

app.get('/', function (req, res) {
  let cfIP = '';
  if (req.header('cf-connecting-ip')) {
    cfIP = req.header('cf-connecting-ip');
  } else {
    console.log(req.connection.remoteAddress);
    cfIP = req.connection.remoteAddress;
  }
  res.send({ipAddress: cfIP});
});

app.listen(3000, function () {
  console.log('App started')
});
