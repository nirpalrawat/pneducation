const express = require('express')
const UserController = require('../controllers/UserControllers')
const route = express.Router()


route.post('/signUp',UserController.signUp)
route.post('/signIn',UserController.signIn)




module.exports =route