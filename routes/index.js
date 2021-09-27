var express = require('express');
var router = express.Router();

const {index,service,contact} = require('../controllers/indexController');

/* GET home page. */
router.get('/', index);

router.get('/services', service);

router.get('/contact', contact);

module.exports = router;
