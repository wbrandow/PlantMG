const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

/*  internal method to render the meal list  */
const renderMealsList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Meals';
    if (!(responseBody instanceof Array)) {
        message = ' API lookup error';
        responseBody = [];
    }
    else if (!responseBody.length) {
        message = 'No meals exist in our database!';
    }
    res.render('meals',
        {
            title: pageTitle,
            meals: responseBody,
            message
        }
    );
}

/* GET travel list view */
const mealsList = (req, res) => {
    const path = '/api/meals';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    
    console.info('>> mealsController.mealsList calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, {statusCode}, body) => {
            if (err) {
                console.error(err);
            }
            renderMealsList(req, res, body);
        }
    );
};

module.exports = {
    mealsList
};