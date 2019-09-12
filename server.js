const express = require('express');
const path = require('path');
const dbFunction = require('./db');
const db = dbFunction('products.json');

const app = express();

app.get('/',async (req, res, next )=>{
  const results = await db.findAll();
  console.log(results);
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/products', async (req, res, next) => {
  try{
    const results = await db.findAll();
    res.send(results);
  }
  catch(ex){
    next(ex);
  }

});

app.listen(3000, console.log('App function is listening') );






/*
const path = require('path');

const dataLayer = db('users.json', ()=>{});




app.use(express.json());

app.get('/api/users',async() => {



});


*/
