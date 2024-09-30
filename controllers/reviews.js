// Import
const Whisky = require("../models/Whisky")

// Review Routes
    // Post a Review - POST - /whiskies/:id
const postReview = async (req, res) => {
    try{
        const foundWhisky = await Whisky.findById(req.params.id)
        foundWhisky.reviews.push(req.body)

        await foundWhisky.save()
        console.log("posted review for:", foundWhisky)
        res.redirect(`/whiskies/${req.params.id}`)
    } catch(err){
        console.log(err)
        res.redirect(`/whiskies/${req.params.id}`)
    }
}    

// Exports
module.exports ={
    postReview,
}

