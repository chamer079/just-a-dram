// Import
const Whisky = require("../models/Whisky")


// Whisky Routes
    // Whisky Index - GET -> "/whiskies"
const getAllWhiskies = async (req, res) => {
    try{
        const allWhiskies = await Whisky.find()
        // console.log("getAllWhiskies:", "index")
        res.render("whiskies/index")
    } catch(err){
        console.log(err)
        res.redirect("/")
    }
}

    // New Whisky - GET -> "/whiskies/new"



    // Show Whisky - GET -> "/whiskies/:id"



    // Post Whisky - POST -> "/whikies"



    // Delete Whisky - DELETE -> "/whiskies/:id"



    // Edit Whisky - GET -> "/whiskies/:id/edit"



    // Update Whisky - PUT -> "/whiskies/:id"



// Exports
module.exports = {
    getAllWhiskies,
}