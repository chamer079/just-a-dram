// Import
const Whisky = require("../models/Whisky")


// Whisky Routes
    // Whisky Index - GET -> "/whiskies"
const getAllWhiskies = async (req, res) => {
    try{
        const allWhiskies = await Whisky.find()
        // console.log("rendering getAllWhiskies:", "index")
        res.render("whiskies/index", { whiskies: allWhiskies })
    } catch(err){
        console.log(err)
        res.redirect("/")
    }
}

    // New Whisky - GET -> "/whiskies/new"
const createWhisky = async (req, res) => {
//   console.log(" rendering createWhisky", "whiskies/new")
  res.render("whiskies/new")
}


    // Show Whisky - GET -> "/whiskies/:id"



    // Post Whisky - POST -> "/whikies"
const postWhisky = async (req, res) => {
    try{
        await Whisky.create(req.body)
        console.log("create req.body:", req.body)
        res.redirect("/whiskies")
    } catch(err){
        console.log(err)
        res.status(400).json({error: err.message})
    }
}


    // Delete Whisky - DELETE -> "/whiskies/:id"



    // Edit Whisky - GET -> "/whiskies/:id/edit"



    // Update Whisky - PUT -> "/whiskies/:id"



// Exports
module.exports = {
    getAllWhiskies,
    createWhisky,
    postWhisky,
}