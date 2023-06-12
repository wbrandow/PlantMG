/* GET Homepage */
const index = (req, res) => {
    res.render('index', {title: 'PlantMG'});
};

module.exports = {
    index
};