const express = require('express');
const app = express();

app.get('/', (req, res) => {

  res.send('<h1>Welcome to my app!</h1>');

});

app.get('/home', (req, res) => {
   
   res.send('<h1>This is the home page</h1>');

})

app.get('/home/profile', (req, res) => {

  res.send('<h1>This is my profile</h1>');

})

app.listen(3000, function(error) {

  if(error) {

    console.log(error);

  } else {

    console.log('Servidor ativo');

  }

});