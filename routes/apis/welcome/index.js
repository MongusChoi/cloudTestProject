const router = require('express').Router()
const controller = require('./welcome.controller')

router.get('/', controller.helloWorld)

module.exports = router