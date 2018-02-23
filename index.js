'use strict';

//import { request, response } from 'https';

var express = require('express');
var app = express();

const port = process.env.PORT || 8000;

app.get('/', (request, response) => {
  response.send('Tänne tulee hieno app OhSiHaa varten!');
});

app.listen(port, (err) => {
  if(err) {
    return console.log('Vihtori Matti: ', err);
  }
  console.log('Kuunnellaan porttia ', port);
});


