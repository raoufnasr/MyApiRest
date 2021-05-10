var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

router.post('/register', userController.addUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);
router.get('/user/:id', userController.getUser);
router.get('/users', userController.getUsers);



module.exports = router;