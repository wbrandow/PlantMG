const mongoose = require('mongoose');
const Meal = mongoose.model('meals');

// GET: /meals - list all meals
const mealsList = async (req, res) => {
    Meal
        .find({})
        .exec((err, meals) => {
            if (!meals) {
                return res
                    .status(404)
                    .json({"message": "meals not found"});        
            }
            else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            else {
                return res
                    .status(200)
                    .json(meals);
            }
        });
};

// GET: /meals/:mealCode - returns a single meal
const mealsFindByCode = async (req, res) => {
    Meal
        .find({'code': req.params.mealCode})
        .exec((err, meal) => {
            if (!meal) {
                return res
                    .status(404)
                    .json({"message": "meal not found"});
            }
            else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            else {
                return res
                    .status(200)
                    .json(meal);
            }
        });
};

module.exports = {
    mealsList,
    mealsFindByCode
};