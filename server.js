

const express = require('express');
const path = require('path');

const dataLayer = db('users.json', ()=>{});


const app = express();



app.use(express.json());

app.get('/api/users',async() => {



});

app.listen(3000, ()=> console.log('listening on port 3000'));
