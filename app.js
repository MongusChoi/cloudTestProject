const express = require('express')
const app = express()
const server = require('http').Server(app)
const cors = require('cors')
const global = require('./global')

const port = process.env.PORT || 2008

app.use(cors())
app.use('/apis', require('./routes/apis'))

server.listen(port, function () {
    console.log('[system] Open | Port : ' + port)
})

const mongoose = require('mongoose')

mongoose.connect(global.MONGO_CONNECTION_STRING, { useNewUrlParser: true, autoReconnect: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 1000, dbName: global.MONGO_DB_NAME })

const db = mongoose.connection
db.on('error', console.error)
db.once('open', () => {
    console.log('[system] mongodb connect')
})