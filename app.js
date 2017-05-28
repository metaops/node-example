const express = require('express')
const app = express()
const os = require('os')
const path = require('path')

app.use('/', express.static('public'))

app.get('/machine-info', function(req, res) {
  res.send(os.networkInterfaces())
})

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})
