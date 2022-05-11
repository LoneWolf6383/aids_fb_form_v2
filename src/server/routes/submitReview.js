const router = require('express').Router();
const { Review } = require('../models/reviewModel');
const { User } = require('../models/userModel');

router.post('/', async (req, res) => {
    try {
        if (User.findOne({ username: req.body.username })) {
            if (Review.findOne({ username: req.body.username })) {
                var user = Review.findOne({ username: req.body.username })
                user.updateOne({ username: req.body.username }, { $set: { review: req.body.review } }, (err, res) => {
                if(err)
                        console.log(err);
                })
            }
            else{
            await new Review({
                username: req.body.username,
                review: req.body.review
            }).save()
            }
            console.log('Review added');
        }
        else
            res.status(500).send({message:'Register first'})
    } catch (error) {
        res.status(500).send({message:'File not found/not available'})
    }
})

module.exports= router