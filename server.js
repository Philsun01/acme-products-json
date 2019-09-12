const express = require('express');

const app = express();

app.get('/',(req, res, next )=>{
  res.send("Hello World Again");
});

app.listen(3000, console.log('App function is listening') );






/*
const path = require('path');

const dataLayer = db('users.json', ()=>{});




app.use(express.json());

app.get('/api/users',async() => {



});


*/
