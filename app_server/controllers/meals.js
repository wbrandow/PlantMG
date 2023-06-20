const fs = require('fs');
const mealList = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET Meals page */
const meals = (req, res) => {
    res.render('meals', {title: 'Reciplace', mealList});
};

module.exports = {
    meals
};