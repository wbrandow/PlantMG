var express = require('express');
var router = express.Router();
const ctrlMeals = require('../controllers/meals');

/* GET home page. */
router.get('/', ctrlMeals.meals);

module.exports = router;