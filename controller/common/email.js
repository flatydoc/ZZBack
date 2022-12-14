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
      subject: "New application on the ZZ Group website",
      html: `<div>
              <p><b>${data.name}</b> 
              ${
                data.company
                  ? "from " + "<b>" + data.company + "</b>" + " company"
                  : ""
              } 
              left a request!</p>
              <p>Contacts:</p>
              <ul style='list-style: none'>
                <li style='margin-left: 10px'>Phone: +${data.phone}</li>
                <li style='margin-left: 10px'>Email: ${data.email}</li>
              </ul>
              <p>${
                data.selectedOption
                  ? "Product of interest: " + data.selectedOption
                  : ""
              }</p>
              <p>
              ${data.message ? "Message: " + `<i>${data.message}</i>` : ""}</p>
            </div>`,
    };

    transporter.sendMail(messageData, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}

module.exports = Email;
