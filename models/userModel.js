const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill in your name"],
    maxlength: 30,
    minlength: 15,
  },
  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: "Please supply a valid email address",
    },
    required: [true, "Please fill in your email address"],
    unique: [true, "This email address in our database"],
  },
  password: {
    type: String,
    required: [true, "Please supply your email address"],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: true,
    select: false,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "input the correct password",
    },
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
