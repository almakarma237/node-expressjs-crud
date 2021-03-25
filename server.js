// getting-started.js
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const portServer = 8000

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(express.json())

// project routes
const subscribersRouter = require('./routes/subscribers.route')
app.use('/subscribers', subscribersRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// init express server
var server = app.listen(portServer, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});

module.exports = server