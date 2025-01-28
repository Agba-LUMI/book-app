const express = require("express")
const userController = require('../controllers/user')

const router = express.Router()



router.post('/user', userController.createUser);


router.get('/users', userController.getAllUsers)


router.get('/:id', userController.getSingleUser)

module.exports = router;
  