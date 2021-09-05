const nodeMailer = require("../utils/nodemailer");

exports.emailer = (req, res) => {
  let { name,email,category, uuid} = req.body;

  const mail_status = nodeMailer(name,email,category,uuid);
  
}