const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "prithvisingh9057@gmail.com",
      pass: "lmqwwqhskhtaelwr",
    },
  });
  
  module.exports={transporter}