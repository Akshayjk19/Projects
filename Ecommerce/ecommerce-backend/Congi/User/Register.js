const user = require("./UserSchema");
const bycrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { Name, Email, Password, PhoneNumber, Address } = req.body;

    const findEmail = await user.findOne({ Email });

    if (!Name || !Email || !Password || !PhoneNumber || !Address) {
      res.json({ msg: "Field is Empty" });
    }

    if (findEmail) {
      res.json({ msg: "Email Already Exist" });
    } else if (Password.length >= 6) {
      const salt = await bycrpt.genSalt(10);

      const hashpassword = await bycrpt.hash(Password, salt);

      const adduser = await user.create({
        Name,
        Email,
        Password: hashpassword,
        PhoneNumber,
        Address,
      });
      res.json({
        msg: "Registration Succesfull",
        Name: adduser.Name,
        Email: adduser.Email,
        Password: adduser.Password,
        PhoneNumber: adduser.PhoneNumber,
        Address: adduser.Address,
        Token: createtoken(adduser._id),
        Role: adduser.Role,
      });
    } else {
      res.json({ msg: "Password is Less Than 6" });
    }
  } catch (error) {
    console.log(`Registartion Error is ${error}`);
    res.status(500).send({
      seccess: false,
      message: "Error in Registration",
      error,
    });
  }
};

const createtoken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};
module.exports = register;
