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

const mealsAddMeal = async (req, res) => {
    console.log('Inside mealsController#mealsAddMeal');

    Meal
        .create({
            name: req.body.name,
            description: req.body.description,
            chef: req.body.chef,
            image: req.body.image,
            rating: '0',
            ingredients: req.body.ingredients,
            directions: req.body.directions
        },
        (err, meal) => {
            if (err) {
                return res
                    .status(400)  // bad request, invalid content
                    .json(err);
            }
            else {
                return res
                    .status(201)  // created
                    .json(meal);
            }
        });
};

module.exports = {
    mealsList,
    mealsFindByCode,
    mealsAddMeal
};