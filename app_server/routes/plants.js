var express = require('express');
var router = express.Router();
const ctrlPlants = require('../controllers/plants');

/* GET home page. */
router.get('/', ctrlPlants.plants);

module.exports = router;