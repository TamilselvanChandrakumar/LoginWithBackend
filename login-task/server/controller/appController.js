const UserModel = require("../model/loginModel.js");
const UserOtp = require("../model/otpModel.js");
const otpGenratore = require("otp-generator");
const nodeMailer = require("nodemailer");

// mailconfiguration:

let config = {
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

let transporter = nodeMailer.createTransport(config);

// controller for register

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);

    const newUser = new UserModel({
      username,
      email,
      password,
    });
    newUser
      .save(newUser)
      .then((register) => {
        res.json(register);
      })
      .catch((error) => {
        res.status(406).json({ error: error.message || "somthing went wrong" });
      });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// contoller for login

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    UserModel.findOne({ email })
      .then((user) => {
        if (user.password === password) {
          return res.status(200).send({
            msg: "login successful",
            username: user.username,
          });
        } else {
          return res.status(406).send({ msg: "invalid password" });
        }
      })
      .catch((error) => {
        return res.status(500).send({ error: "email not found" });
      });
  } catch (err) {
    return res.status(500).send({ err });
  }
};

// generate otp:

exports.generateOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).send({ error: "enter email" });
    }

    UserModel.findOne({ email })
      .then((user) => {
        if (user.email === email) {
          const OTP = otpGenratore.generate(4, {
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false,
          });
          UserOtp.findOne({ email })
            .then((user) => {
              if (user) {
                const updatedata = UserOtp.findByIdAndUpdate(
                  { _id: user._id },
                  {
                    otp: OTP,
                  },
                  { new: true }
                );
                updatedata.save();

                let message = {
                  from: process.env.EMAIL,
                  to: email,
                  subject: "Sending Email for otp validation",
                  text: `OTP:- ${OTP}`,
                };
                transporter
                  .sendMail(message)
                  .then(() => {
                    return res
                      .status(201)
                      .send({ msg: "mail send successfully" });
                  })
                  .catch((err) => {
                    return res.status(406).send({ err });
                  });
              } else {
                const saveOtpData = new UserOtp({
                  email,
                  otp: OTP,
                });
                saveOtpData.save();
                let message = {
                  from: process.env.EMAIL,
                  to: email,
                  subject: "Sending Email for otp validation",
                  text: `OTP:- ${OTP}`,
                };
                transporter
                  .sendMail(message)
                  .then(() => {
                    return res
                      .status(201)
                      .send({ msg: "mail send successfully" });
                  })
                  .catch((err) => {
                    return res.status(406).send({ err });
                  });
              }
            })
            .catch((err) => {
              return res.status(406).send("you are not a existing user");
            });
        }
      })
      .catch((err) => {
        return res.status(406).send({ error: "invalid email" });
      });
  } catch (err) {
    return res.status(500).send({ err });
  }
};

// verfify otp:

exports.verfifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    UserOtp.findOne({ email })
      .then((user) => {
        if (user.otp === otp) {
          res.status(200).send({ msg: "login successfull" });
        }
      })
      .catch((err) => {
        return res
          .status(406)
          .send({ error: err.message || "email coudlnt find" });
      });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};
