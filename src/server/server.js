const express = require('express')
const cors = require('cors')
const app = express()
const connection = require('./db')
const authRoutes = require('./routes/auth')
const submitReviewRoutes = require('./routes/submitReview');
const getAllCourseDetails = require('./utilities/getAllCourseDetails')
const addFeedBack = require('./routes/addFeedback')
const getFeedbackPattern  = require('./utilities/getFeedbackPattern')
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
connection()
app.use(cors())
app.use(express.json())

app.use('/feedback/signin',authRoutes)
app.use('/feedback/review',submitReviewRoutes)
app.use('/getAllCourseDetails', getAllCourseDetails)
app.use('/getFeedbackPattern', getFeedbackPattern)
app.use('/addFeedBack',addFeedBack)
app.listen(3001, () => {
    console.log('Server fired up at 3001');
})