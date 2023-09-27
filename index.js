require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./db/db');


// Establish DataBase Connection
connectDB();




app.get('/', (req, res) => {
    res.send('Hello World!')
  })




const port =process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port`));