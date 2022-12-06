const express = require("express");
let cookieParser = require("cookie-parser");

const dotenv = require("dotenv");
dotenv.config();

let cors = require("cors");
let corsOptions = {
  credentials: true,
};

const app = express();

let mailRouter = require("./router/mailRouter");

app.options("*", cors(corsOptions));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/mail", mailRouter);

module.exports = app;
