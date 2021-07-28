/*eslint no-undef: "error"*/
/*eslint-env node*/
const express = require("express");
const path = require("path");
const serverless = require("serverless-http");
//const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (req, res) => res.sendFile("index.html", { root: "dist" }));
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));

const handler = new serverless(app);
module.exports = { handler };
