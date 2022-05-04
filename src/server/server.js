const express = require('express')
const cors = require('cors')
const app = express()
const connection = require('./db')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const submitReviewRoutes = require('./routes/submitReview');
const getAllCourseName = require('./utilities/getAllCourseNames')
const getAllCourseId = require('./utilities/getAllCourseId')
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
connection()
app.use(cors())
app.use(express.json())

app.use('/feedback/signup',userRoutes)
app.use('/feedback/signin',authRoutes)
app.use('/feedback/review',submitReviewRoutes)
app.use('/getAllCourseNames',getAllCourseName)
app.use('/getAllCourseIds',getAllCourseId)
app.listen(3001, () => {
    console.log('Server fired up at 3001');
})