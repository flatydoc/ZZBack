"use strict";

const Email = require("../controller/common/email");

module.exports = class mail {
  async send(data) {
    console.log(data);
    await new Email().sendMail(data);
  }
};
