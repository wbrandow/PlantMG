/* GET Homepage */
const index = (req, res) => {
    res.render('index', {title: 'Reciplace'});
};

module.exports = {
    index
};