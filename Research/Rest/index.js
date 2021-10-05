const express = require('express')
const app = express();
const PORT = 4080;


app.get('/usuarios', (req, res) => {

    res.send(users);

});

var users = [

  {name: 'Fulano'},
  {name: 'Fulano'},
  {name: 'Fulano'},
  {name: 'Fulano'},
  {name: 'Fulano'},
  {name: 'Fulano'},

];

app.listen(PORT, (error) => {

 if(error) { 

 } else {
    
   console.log(`servidor ativo na porta ${PORT}`);
 }

});