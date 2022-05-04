const {course} = require('../models/courseModel');
const router = require('express').Router()

var courseIds=[]
router.post('/', async (req, res) => {
    const docs = await course.find({})
    for (let i  = 0; i < docs.length; i++) {
        courseIds.push(docs[i].courseId)
    } 
    res.send(Array.from(new Set(courseIds)))
})

module.exports=router