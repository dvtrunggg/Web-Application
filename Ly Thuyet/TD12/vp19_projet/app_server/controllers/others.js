/* GET homepage */
const index = (req, res) => {
    res.render('indexMain', { title: 'Express' });
    };
    
    module.exports = {
    index
    };


/* GET 'about' page */
const about = (req, res) => {
    res.render('indexAbout', { title: 'About' });
    };
    
    module.exports = {
    about
};