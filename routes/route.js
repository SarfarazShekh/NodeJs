const express = require('express');
const router = express.Router();
const Student = require('../models/student');
//Get all Records
router.get('/', async (req, res) => {
    try {
        const studentData = await Student.find();
        res.json(studentData);
    }
    catch (err) {
        res.send(err);
    }
});
//Save into the data base
router.post('/', async (req, res) => {
    try {
        const _student = new Student({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            address: req.body.address
        });
        const s = await _student.save();
        res.json(s);

    } catch (error) {
        res.send("error" + error);
    }
})
//Get records by id
router.get('/:id', async (req, res) => {
    try {
        const _student = await Student.findById(req.params.id);
        res.json(_student);
    } catch (error) {
        res.send("Error " + error);
    }
});
//update record
router.patch('/:id', async (req, res) => {
    try {
        const _student = await Student.findById(req.params.id);
        _student.address=req.body.address;
        const s=_student.save();
       
        res.json(s);
    } catch (error) {
        res.send("Error " + error);
    }
});
//Delete the record
router.delete('/:id', async (req, res) => {
    try {
        const _student = await Student.findById(req.params.id);
        const s=_student.deleteOne();
        console.log(s);
        res.json(s);
    } catch (error) {
        res.send("Error " + error);
    }
});
module.exports = router;