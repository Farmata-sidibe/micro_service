const bcrypt = require("bcrypt");
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  
  try {
    const { email, password, role } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email: email,
      password: hashPassword,
      role: role,
    });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Some error occurred while creating user.",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid ." });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.TOKEN_SECRET, {
      expiresIn: Number(process.env.TOKEN_EXPIRATION),
    });

    res.status(200).json({token, user});
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Some error occurred while connected user.",
    });
  }
};

exports.getUserInfoFromToken = (req, res) => {
  try {
    const user = {
      id: req.auth.userId,
      role: req.auth.role
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(err.status || 500).json({
      error: err.message || `Some error occurred while sending user infos"`,
    });
  }
};

