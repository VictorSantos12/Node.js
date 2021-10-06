const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { isString } = require('util');

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

app.listen(PORT, () => {
  
  console.log(`Servidor ativo na porta ${PORT}`);

});