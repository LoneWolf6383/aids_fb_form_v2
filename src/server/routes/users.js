const router = require('express').Router()
const {User,validate} = require('../models/userModel')
// const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    try {
        const { error } = validate(req.body)
        if(error)
            return res.status(400).send({message:error.details[0].message})
        const user = await User.findOne({ admissionNo: req.body.admissionNo })
        if (user)
            return res.status(400).send({message:"user already exists"})
        // const salt = await bcrypt.genSalt(Number(10))
        // const hashPassword = await bcrypt.hash(req.body.password,salt)
        await new User({...req.body,}).save()
        res.status(201).send({ message:'User created Successfully'})
    } catch (error) {
        console.log(error);
        res.status(500).send({ message:'Internal Server Error'})
    }
})
module.exports = router