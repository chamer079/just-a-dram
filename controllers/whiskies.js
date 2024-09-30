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
const showWhisky = async (req, res) => {
    try{
        const foundWhisky = await Whisky.findById(req.params.id)
        const whiskyData = { whisky: foundWhisky }
        console.log("rendering showWhiskey:", "show")
        res.render("whiskies/show", whiskyData)
    } catch(err){
        console.log(err)
        res.redirect("/")
    }
}

    // Post Whisky - POST -> "/whikies"
const postWhisky = async (req, res) => {
    try{
        await Whisky.create(req.body)
        // console.log("create req.body:", req.body)
        res.redirect("/whiskies")
    } catch(err){
        console.log(err)
        res.status(400).json({error: err.message})
    }
}

    // Delete Whisky - DELETE -> "/whiskies/:id"
const deleteWhisky = async (req, res) => {
    try{
        await Whisky.findByIdAndDelete(req.params.id)
        console.log("Response from DB after deletion:", deleteWhisky)
        res.redirect("/whiskies")
    } catch(err){
        console.log(err)
        res.redirect("/whiskies")
    }
}

    // Edit Whisky - GET -> "/whiskies/:id/edit"
const editWhisky = async (req, res) => {
    try{
        const whiskyToEdit = await Whisky.findById(req.params.id)
        // console.log("rendering whiskyToEdit:", whiskyToEdit)
        res.render("whiskies/edit", { whisky: whiskyToEdit})
    } catch(err){
        console.log(err)
        res.redirect("/")
    }
}


    // Update Whisky - PUT -> "/whiskies/:id"



// Exports
module.exports = {
    getAllWhiskies,
    createWhisky,
    showWhisky,
    postWhisky,
    deleteWhisky,
    editWhisky,
}