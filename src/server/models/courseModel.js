const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema(
    {
        regulation:{type:Number,required:true},
        courseId: { type: String, required: true },
        courseDetails: { type: Array, required: true },
        co:{type:Object}
    },
    {collection:'Courses'}
)
const course = mongoose.model('course',courseSchema)
module.exports={course}