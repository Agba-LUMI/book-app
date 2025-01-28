const express = require('express')
const app = express()
const port = 3000
const user = require('./routes/user')
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/users');

app.use('/', user);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      

