require('dotenv').config()

const port = process.env.PORT || 3000;


const express = require('express');
const app = express();
const proxy = require("express-http-proxy")


app.use("/api/auth", proxy(process.env.PROXY_URI));

app.listen(port, () => {
  console.log(`API Gateway en cours d\'exécution sur le port ${port}`);
});
