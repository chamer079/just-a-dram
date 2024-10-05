const Whisky = require("../models/Whisky");

const postReview = async (req, res) => {
  try {
    const foundWhisky = await Whisky.findById(req.params.id);
    foundWhisky.reviews.push(req.body);

    await foundWhisky.save();
    res.redirect(`/whiskies/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.redirect(`/whiskies/${req.params.id}`);
  }
};

module.exports = {
  postReview,
};
