const mongoose = require('mongoose')
const jwt = require('json-web-token');
const joi = require('joi')
const passwordComplexity = require('joi-password-complexity');


const facultySchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true, },
    },
    {collection:'faculty_login_info'}
)
facultySchema.methods.generateAuthToken = () => {
    const token = jwt.sign({ _id: this._id }, 'jwt-private-key', { expiresIn: '7d' })
    return token
}
const Faculty = mongoose.model('faculty', facultySchema)
const validate = (data) => {
    const schema = joi.object({
        username: joi.string().required().label('username'),
        password:passwordComplexity().required().label('password')
    })
    return schema.validate(data)
}
module.exports = {Faculty,validate}