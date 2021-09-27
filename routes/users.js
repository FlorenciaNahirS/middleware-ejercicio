var express = require('express');
var router = express.Router();
const loginValidator = require('../validations/loginValidation')

const {login, processLogin, user, incorrectUser, register} = require('../controllers/usersController');

/* /users */
router.get('/login', login);
router.post('/login',loginValidator, processLogin);
router.get('/user', user)
router.get('/sorry', incorrectUser)
router.get('/register', register);

module.exports = router;
