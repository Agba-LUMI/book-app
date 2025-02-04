const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill in your name"],
  },
  email: {
    type: String,
    required: [true, "Please fill in your email address"],
    unique: [true, "This email exists in our database"],
  },
  password: {
    type: String,
    required: [true, "Please supply your email address"],
    select: false,
  },
});
userSchema.methods.changedPasswordAfter = function (JWTTimeStamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimeStamp < changedTimeStamp;
  }
  return false;
};
const User = mongoose.model("User", userSchema);
module.exports = User;
