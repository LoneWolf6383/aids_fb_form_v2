const mongoose = require('mongoose')
const jwt = require('json-web-token');
const joi = require('joi')
const passwordComplexity = require('joi-password-complexity');


const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        admissionNo: { type: String, required: true, unique: true },
        password: { type: String, required: true, },
    },
    {collection:'login_info'}
)

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({ _id: this._id }, 'jwt-private-key', { expiresIn: '7d' })
    return token
}
const User = mongoose.model('user', userSchema)

const validate = (data) => {
    const schema = joi.object({
        name: joi.string().required().label('name'),
        admissionNo: joi.string().required().label('admission number'),
        password:passwordComplexity().required().label('password')
    })
    return schema.validate(data)
}

module.exports = {User,validate}