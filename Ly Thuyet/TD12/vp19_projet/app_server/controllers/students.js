/* GET 'home' page */
const homelist = (req, res) => {
    res.render('indexMain', { title: 'Home' });
    };
    /* GET 'Student info' page */
    const studentInfo = (req, res) => {
    res.render('indexStudent', { title: 'Student info' });
    };
    
    module.exports = {
    homelist,
    studentInfo
};