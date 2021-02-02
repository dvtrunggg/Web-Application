var express = require('express');
var router = express.Router();
var controller = require('../controller/controller_student')

router.get('/student', controller.find)
router.get('/student/new', controller.addStudent)
router.post('/student/new', controller.addStudent)
router.get('/student/:studentID', controller.getID)
router.patch('/student/:studentID', controller.updateStudent)
router.delete('/student/:studentID', controller.removeStudent)

module.exports = router;