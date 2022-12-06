"use strict";
let nodemailer = require("nodemailer");

class Email {
  constructor() {
    this.user = process.env.EMAIL;
    this.pass = process.env.PASSWORD;
  }

  async sendMail(data) {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: this.user,
        pass: this.pass,
      },
    });

    let messageData = {
      from: this.user + " <" + this.user + ">",
      to: this.user,
      subject: "New application from ZZ Group website",
      text: data.message,
      text: `Name: ${data.name},
            Company: ${data.company},
            Email: ${data.company},
            Phone: ${data.phone},
            Option: ${data.selectedOption},
            Message: ${data.message}`,
    };

    transporter.sendMail(messageData, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}

module.exports = Email;
