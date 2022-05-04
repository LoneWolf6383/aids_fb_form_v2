const {course} = require('../models/courseModel');
const router = require('express').Router()

var courseNames=[]
router.post('/', async (req, res) => {
    const docs = await course.find({})
    for (let i  = 0; i < docs.length; i++) {
        courseNames.push(docs[i].courseDetails[0])
    } 
    res.send(Array.from(new Set(courseNames)))
})

module.exports=router