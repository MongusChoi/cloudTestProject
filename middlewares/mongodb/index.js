const mongoose = require('mongoose')
const { MONGO_CONNECTION_STRING, MONGO_DB_NAME } = require('../../global')

const db = mongoose.connection
db.on('error', console.error)
db.once('open', () => {
    console.log('Mongoose Connect!')
})