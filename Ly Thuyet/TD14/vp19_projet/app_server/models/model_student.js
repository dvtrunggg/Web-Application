var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Student')

mongoose.connection.on('open', function() {
    console.log('Connecting mongo DB!')
})
mongoose.connection.on('error', function(err) {
    console.log('err')
})

var studentSchema = new mongoose.Schema({
    name: String,
    studentID: String,
    dateOfBirth: String,
    class: String,
})


var Students = mongoose.model('Students', studentSchema);

Students.create({
    name: "Dinh Viet Trung",
    studentID: "18126035",
    dateOfBirth: "June 2 1999",
    class: "18vp"
}, Call);



function Call(err, newUser) {
    console.log('Created object with ID',
        newUser._id);
};

module.exports = Students;