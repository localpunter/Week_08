const express = require('express');
// when we require ('express') it returns a function.
const app = express();
// then we invoke'()' the function '= express'

app.use(express.static('client/public'));


app.get('/', function (req, res) {
  res.sendFile('index.html')
// with the res object send back 'Hello world!'
});

// .get is the type of request
// '/' is the path
// function to ...html') is the behaviour

app.listen(3000, function () {
  console.log('App running on 3000');
});
