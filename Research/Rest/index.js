const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { isString } = require('util');
const { RSA_NO_PADDING } = require('constants');

const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var dataBase = {

   users: [

     {
       id: '4354534636565645645645645646', 
       name: 'Ana', 
       age: 25
     },
     {
       id: '1231214233453453453453435345', 
       name: 'Luana', 
       age: 18
     },
     {
       id: '46453345676786798979786755543', 
       name: 'Pedro', 
       age: 26
     },
     {
       id: '12345677867865675645747467575', 
       name: 'Anderson', 
       age: 46
     },

   ]
}

app.get('/users', (req, res) => {
   res.json(dataBase.users);
});


app.get('/users/getUser/:id', (req, res) => {

    var id = req.params.id;

    if(isString(id)) {
     
     var user = dataBase.users.find(u => u.id == id);
     
     if(user != undefined) {

      res.json(user);

     } else {

      res.statusCode = 404;
      res.send('Not Found');

     }

    } else {
      res.statusCode = 400;
      res.send({});
    }

});


app.post('/users/register', (req, res) => {

  var { name, age } = req.body;
    
  dataBase.users.push({

    id: '2342342342342423424327866786',
    name,
    age

  });

    res.statusCode = 200;
    res.send('OK');

});


app.delete('/users/delete/:id', (req, res) => {

  if(isString(req.params.id)) {
   
   var id = parseInt(req.params.id);
   var index = dataBase.users.findIndex(u => u.id == id);
   
   if(index != -1) {

    dataBase.users.splice(index, 1);
    res.sendStatus(200);

   } else {

     res.sendStatus(404)

   }

  } else {
    res.statusCode = 400;
    res.send({});
  }

});

app.put('/users/update/:id', (req, res) => {

  var id = req.params.id;

  if(isString(id)) {
   
   var user = dataBase.users.find(u => u.id == id);
   
   if(user != undefined) {

    var { name, age } = req.body;

    if(name != undefined) {
      user.name = name;
    }

    if(age != undefined) {
      user.age = age;
    }

    res.sendStatus(200);

   } else {

    res.statusCode = 404;
    res.send('Not Found');

   }

  } else {
    res.statusCode = 400;
    res.send({});
  }

});

app.listen(PORT, () => {
  
  console.log(`Servidor ativo na porta ${PORT}`);

});