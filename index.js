require("dotenv/config");
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 6969;

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // Standard port for Gmail's SMTP
  secure: false,
  auth: {
    user: "kuldeeep.yadav1@gmail.com",
    pass: "nisy spsp cxtj qqrx",
  },
});

app.post("/email", (req, res) => {
  console.log("Recieved", req.body);
  const { name, email, message } = req.body;

  const ops = {
    from: "kuldeeep.yadav1@gmail.com",
    to: "kuldeeep.yadav1@gmail.com",
    subject: `Message from ${name} ${email}`,
    text: message,
  };

  transporter.sendMail(ops, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Something went wrong!");
    }
    res.status(200).send("Thanks, I'll get back to you!");
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
