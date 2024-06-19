require('dotenv').config()

const app = require("./app.js");
const port = process.env.PORT || 8081;

app.get("/", (req, res) => {
  res.send("Welcome to the auth microservice !")
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});







