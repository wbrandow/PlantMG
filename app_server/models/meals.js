const mongoose = require('mongoose');

// define ingredient Schema
const ingredientSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    amount: { type: String, required: true },
    measurementUnit: { type: String, required: true },
    detail: { type: String, required: true }
});

// define direction schema
const directionSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    instruction: { type: String, required: true },
    image: { type: String, required: true }
});

// define meal schema
const mealSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    image: { type: String, required: true },
    rating: {type: String, required: true},
    ingredients: { type: [ingredientSchema], required: true },
    directions: { type: [directionSchema], required: true }
});

mongoose.model('meals', mealSchema);