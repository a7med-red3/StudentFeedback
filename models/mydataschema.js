const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    studentName: String,
    courseName: String,
    rating: Number,
    feedback: String
});

const Feed = mongoose.model("Feed", articleSchema);
// Feeds >> in mongodb


module.exports = Feed;