const express = require('express');
const app = express();

app.listen(3000, function(error) {

  if(error) {

    console.log(error);

  } else {

    console.log('Servidor ativo');

  }

});