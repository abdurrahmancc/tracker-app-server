const jwt = require("jsonwebtoken");

exports.generateToken = (userInfo) => {
  try {
    const payload = {
      email: userInfo.email,
      userId: userInfo._id,
      username: userInfo.name,
      avatar: userInfo.avatar || null,
      role: userInfo.role || "user",
    };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "30d" });

    return token;
  } catch (err) {
    console.log(err.message);
  }
};
