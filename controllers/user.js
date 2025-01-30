const UserModel = require("../model/user");

async function createUser(req, res) {
  // create a user name

  req.body.username = req.body.email.split("@")[0];
  // set isAdult using the age
  req.body.isAdult = req.body.age < 20 ? false : true;
  // create the user
  await UserModel.create(req.body);

  res.json({
    message: "success!!!",
  });
}

async function getAllUsers(req, res) {
  const users = await UserModel.find({});
  res.json({
    message: "success!!!",
    data: users,
  });
}

async function getSingleUser(req, res) {
  const user = await UserModel.findById(req.params.id);
  res.json({
    message: "success!!!",
    data: user,
  });
}

module.exports = { createUser, getAllUsers, getSingleUser };
