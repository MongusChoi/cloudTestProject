const express = require('express')
const app = express()
const server = require('http').Server(app)
const cors = require('cors')

const port = process.env.PORT || 2008

app.use(cors())
app.use('/apis', require('./routes/apis'))

server.listen(port, function () {
    console.log('[system] Open | Port : ' + port)
})