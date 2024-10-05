const Whisky = require("../models/Whisky");

const getAllWhiskies = async (req, res) => {
  try {
    const allWhiskies = await Whisky.find();
    res.render("whiskies/index", { whiskies: allWhiskies });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
};

const createWhisky = async (req, res) => {
  res.render("whiskies/new");
};

const showWhisky = async (req, res) => {
  try {
    const foundWhisky = await Whisky.findById(req.params.id);
    const whiskyData = { whisky: foundWhisky };
    console.log("rendering showWhiskey:", "show");
    res.render("whiskies/show", whiskyData);
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
};

const postWhisky = async (req, res) => {
  try {
    await Whisky.create(req.body);
    console.log("createing post:", req.body);
    res.redirect("/whiskies");
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};

const deleteWhisky = async (req, res) => {
  try {
    await Whisky.findByIdAndDelete(req.params.id);
    res.redirect("/whiskies");
  } catch (err) {
    console.log(err);
    res.redirect("/whiskies");
  }
};

const editWhisky = async (req, res) => {
  try {
    const whiskyToEdit = await Whisky.findById(req.params.id);
    res.render("whiskies/edit", { whisky: whiskyToEdit });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
};

const updateWhisky = async (req, res) => {
  try {
    await Whisky.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect(`/whiskies/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.redirect(`/whiskies/${req.params.id}`);
  }
};

module.exports = {
  getAllWhiskies,
  createWhisky,
  showWhisky,
  postWhisky,
  deleteWhisky,
  editWhisky,
  updateWhisky,
};
