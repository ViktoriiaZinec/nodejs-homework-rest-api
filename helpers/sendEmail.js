const nodemailer = require("nodemailer");

require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "krestafix@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: "krestafix@meta.ua",
  };
  await transport
    .sendMail(email)
    .then(() => console.log("Email success"))
    .catch((error) => {
      console.error("Email sending error:", error);
    });
};

module.exports = sendEmail;
