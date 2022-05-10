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
// app.get('/feedback', (req, res) => {
//     res('C:\\Users\\Namasivaayam 007\\Documents\\programming\\College Projects\\aids_fb_form_v2\\src\\pages\\feedBackForm.jsx');
//   });   
// app.get('/facultyDashboard', (req, res) => {
//     res('C:\\Users\\Namasivaayam 007\\Documents\\programming\\College Projects\\aids_fb_form_v2\\src\\pages\\facultyDashboard.jsx');
//   });   
app.use('/feedback/signin',authRoutes)
app.use('/feedback/review',submitReviewRoutes)
app.use('/getAllCourseDetails', getAllCourseDetails)
app.use('/getFeedbackPattern', getFeedbackPattern)
app.use('/addFeedBack',addFeedBack)
app.listen(3001, () => {
    console.log('Server fired up at 3001');
})