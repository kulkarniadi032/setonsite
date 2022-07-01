const Login = require("../model/auth-modal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createRegisterUser = async (req, res) => {
  // email => adi@gmail.com
  // password => 123
  console.log(req.body);
  try {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    const result = await Login.create(req.body);

    res.status(200).json({
      success: true,
      message: "User Register successfully",
      result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "error" + error,
      result: null,
    });
  }
};

exports.createLoginUserData = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    const result = await Login.findOne({ email });
    if (!result) {
      return res.status(200).json({
        success: false,
        message: "Invalid Email Address",
      });
    }
    const isValid = await bcrypt.compare(password, result.password);
    if (!isValid) {
      return res.status(200).json({
        success: false,
        message: "Incorrect Password",
      });
    }
    const token = await jwt.sign({ id: result._id }, "hidden");
    res.status(200).json({
      success: true,
      message: "User Login Successfully",
      result,
      token,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "error" + error,
    });
  }
};
