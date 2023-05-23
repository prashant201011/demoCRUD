const mongoose = require("mongoose");

const schema = mongoose.Schema;

const apiUser = schema({
  event: String,
  uid: String,
  name: String,
  tagline: String,
  // friendReq:[]
});

const Candidate = mongoose.model("apiUser", apiUser);

module.exports = Candidate;
