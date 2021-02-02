var Students = require('../../models/model_student')

module.exports.find = async function(req, res) {
    var students = await Students.find();
    res.json(students);
}

module.exports.addStudent = async function(req, res) {
    var student = await Students.create(req.body);
    res.json(student);
}
module.exports.getID = async function(req, res) {
    var studentID = req.params.studentID;
    var student = await Students.find({ studentID: studentID })
    res.json(student);
}
module.exports.updateStudent = async function(req, res) {
    var studentID = req.params.studentID;
    var student = await Students.findOneAndUpdate({ studentID: studentID }, req.body, { new: true })
    res.json(student);
}
module.exports.removeStudent = async function(req, res) {
    var studentID = req.params.studentID;
    var student = await Students.deleteOne({ studentID: studentID })
    res.redirect('/student/' + studentID)
}