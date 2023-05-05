const user = require("../models/userModel");

// ! add user with 'POST'
exports.createUser = async (req, res) => {
  try {
    const newUser = await user.create(req.body);
    res.status(200).json({
      newUser,
      msg: "new user has been added successfully",
    });
  } catch (err) {
    res.status(404).json(err);
  }
};

// ! get all users with 'GET'
exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await user.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).json(err);
  }
};

// ! update a user with 'PUT'
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await user.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(404).json(err);
  }
};

// ! delete a user with 'DELETE'
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await user.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "User has been deleted succ !!", user: deletedUser.name });
  } catch (error) {
    res.status(404).json(err);
  }
};
