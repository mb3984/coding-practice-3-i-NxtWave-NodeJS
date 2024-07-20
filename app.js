const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('Express JS')
  console.log('Express JS')
})

module.exports = app
