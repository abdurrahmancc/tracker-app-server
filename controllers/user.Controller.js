const createHttpError = require("http-errors");
const { signupService, findUserByEmail } = require("../services/user.service");
const { generateToken } = require("../utils/token");

/* ============= signup controller ================ */
exports.signup = async (req, res, next) => {
  try {
    console.log(req.body);
    await signupService(req.body);
    res.status(200).json({
      status: "success",
      message: "Successfully signed up",
    });
  } catch (err) {
    next(createHttpError(500, err.message));
  }
};

/* =============== login controller ================ */
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        errors: {
          common: {
            status: "fail",
            msg: "provide your credentials",
          },
        },
      });
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(400).json({
        errors: {
          common: {
            status: "fail",
            msg: "Not found user! please create your account",
          },
        },
      });
    }

    const isPasswordValid = user.comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        errors: {
          common: {
            status: "fail",
            msg: "Password is not correct! Please try again!",
          },
        },
      });
    }

    const token = generateToken(user);

    const { password: pass, ...result } = user.toObject();

    res.status(200).json({
      status: "success",
      message: "successfully logged in",
      data: {
        result,
        token,
      },
    });
  } catch (err) {
    next(createHttpError(500, err.message));
  }
};

/* =============== getMe controller ================ */
exports.getMe = async (req, res, next) => {
  try {
    const user = await findUserByEmail(req.user?.email);
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    next(createHttpError(500, err.message));
  }
};
