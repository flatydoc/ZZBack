"use strict";
let express = require("express");
let router = express.Router();

let Policy = require("cors");
let mailController = require("../controller/mailController");

router.post("/send", Policy(), async function (req, res, next) {
  let data = await new mailController().send(req.body);
  res.json(data);
});

module.exports = router;
