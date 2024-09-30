// Imports
const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const morgan = require("morgan")

// Import Controllers
const whiskiesCtrl = require("./controllers/whiskies")


// App + Configurations
dotenv.config()


const app = express()
const PORT = process.env.PORT || 3000


// Middleware
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))
app.use(morgan("dev"))


// DB Connection
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB: ${mongoose.connection.name}`)
})

mongoose.connection.on("error", (err) => {
    console.log(err)
})


// Whisky Routes
app.get("/", (req,res) => {
    // console.log("landing page", "index")
    res.render("index")
})

app.get("/whiskies", whiskiesCtrl.getAllWhiskies)
app.get("/whiskies/new", whiskiesCtrl.createWhisky)
app.get("/whiskies/:id", whiskiesCtrl.showWhisky)
app.post("/whiskies", whiskiesCtrl.postWhisky)
app.delete("/whiskies/:id", whiskiesCtrl.deleteWhisky)
app.get("/whiskies/:id/edit", whiskiesCtrl.editWhisky)
app.put("/whiskies/:id", whiskiesCtrl.updateWhisky)






// Review Routes





// Server Handler
app.listen(PORT, () => {
    console.log(`Listening to PORT: ${PORT}`)
})