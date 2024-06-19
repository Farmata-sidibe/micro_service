const axios = require("axios");

const adminMiddleware = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const response = await axios.get("http://auth:8081/getRole", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const role = response.data.role;
      if (role === "admin") {
        next();
      } else {
        return res.status(403).json({ error: "Access denied" });
      }
    } else{
        return res.status(403).json({ error: "Access denied" });
    }
  } catch (err) {
    res.status(err.status || 500).json({
      error: err.message || `Some error occurred while using Admin Middleware"`,
    });
  }
};

module.exports = adminMiddleware;
