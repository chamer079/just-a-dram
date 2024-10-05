const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const path = require("path");

const whiskiesCtrl = require("./controllers/whiskies");
const reviewsCtrl = require("./controllers/reviews");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB: ${mongoose.connection.name}`);
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

app.get("/", (req, res) => {
  // console.log("landing page", "index")
  res.render("index");
});

app.get("/whiskies", whiskiesCtrl.getAllWhiskies);
app.get("/whiskies/new", whiskiesCtrl.createWhisky);
app.get("/whiskies/:id", whiskiesCtrl.showWhisky);
app.post("/whiskies", whiskiesCtrl.postWhisky);
app.delete("/whiskies/:id", whiskiesCtrl.deleteWhisky);
app.get("/whiskies/:id/edit", whiskiesCtrl.editWhisky);
app.put("/whiskies/:id", whiskiesCtrl.updateWhisky);

app.post("/whiskies/:id/reviews", reviewsCtrl.postReview);

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
