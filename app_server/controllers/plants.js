const fs = require('fs');
const plantList = JSON.parse(fs.readFileSync('./data/plants.json', 'utf8'));

/* GET Plants page */
const plants = (req, res) => {
    res.render('plants', {title: 'PlantMG', plantList});
};

module.exports = {
    plants
};