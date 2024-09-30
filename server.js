// Imports
const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const morgan = require("morgan")

// Import Controllers
const whiskyCtrl = require("./controllers/whiskies")


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

app.get("/whiskies", whiskyCtrl.getAllWhiskies)






// Review Routes





// Server Handler
app.listen(PORT, () => {
    console.log(`Listening to PORT: ${PORT}`)
})