const express = require('express')
const app = express()

// app.use(loggingMiddleware);

app.get('/', (req, res) => {
  
  console.log('Home Page');
  res.send('Home Page');

});

app.get('/users', authMiddleware, (req, res, next) => {

  console.log('Users Page');
  res.send('Users Page');
//   next();

});


function loggingMiddleware(req, res, next) {
    console.log('Middleware executado');
    next();
  }


function authMiddleware(req, res, next) {
  
    if(req.query.admin === 'true') {
      next();
    } else {
      res.send('Not authenticated');   
    }

  }

app.listen(3000, () => console.log('Servidor ativo'));