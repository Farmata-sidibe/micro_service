const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId = decodedToken.id;
    req.auth = { userId };
    next();
  } catch (err) {
    res.status(401).json({
      erreur: "Unauthorized request !",
    });
  }
};

module.exports.role = (roles) => {
  return  async (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ msg: 'Permission denied' });
    }
    next();
  }

}


