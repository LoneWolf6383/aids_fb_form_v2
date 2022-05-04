const router = require('express').Router();
const { Review } = require('../models/reviewModel');
const { User } = require('../models/userModel');

router.post('/', async (req, res) => {
    try {
        console.log('before req.body');
        console.log(req.body);
        const user = User.findOne({ admissionNo:req.body.admissionNo})
        if(user){
            await Review.insertOne({
                admissionNo: req.body.admissionNo,
                review: req.body.review
            })
            console.log('Review added');
        }
        else
            res.status(500).send({message:'Register first'})
    } catch (error) {
        res.status(500).send({message:'File not found/not available'})
    }
})

module.exports= router