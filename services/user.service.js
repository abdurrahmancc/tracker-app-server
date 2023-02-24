const User = require("../models/UserSchema");

/* ========== signup user ======== */
exports.signupService = async (userInfo) => {
  const user = await User.create(userInfo);
  return user;
};

/* ========== find user with email ======== */
exports.findUserByEmail = async (email) => {
  return await User.findOne({ email });
};
