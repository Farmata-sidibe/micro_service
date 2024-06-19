require('dotenv').config()

const app = require("./app.js");
const port = process.env.PORT || 8082;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
