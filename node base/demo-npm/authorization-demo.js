var jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.listen(process.env.PORT);

app.get("/", function (req, res) {
  var token = jwt.sign({ foo: "bar" }, process.env.PRIVATE + KEY);

  res.cookie("jwt", token, {
    httpOnly: true,
  });
  res.send("토큰 발행 완료");
});

app.get("/jwt/decoded", function (req, res) {
  let jwt = req.headers["authorization"];
  var decoded = jwt.verify(jwt, process.env.PRIVATE_KEY);

  res.send("Hello World");
});
