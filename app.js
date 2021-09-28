/* First step is to seed the data into MongoDB which is located in seeds/index.js */

const express = require('express');
const mongoose = require('mongoose');
const testerRouter = require('./routes/testers');

mongoose.connect('mongodb://localhost:27017/testerDB', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Tester Database connected successfully');
    })
    .catch(err => {
        console.log('Error in connecting Tester DB', err);
    })

const app = express();

//body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//All endpoints are combined int testerRouter
app.use('/',testerRouter);

app.listen(3000,() => {
    console.log("Listening  to the Port 3000");
})