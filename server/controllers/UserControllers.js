const UserModel = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


class UserController {
  static signUp = async (req, res) => {
    try {
      
      const { name, email, password,  } = req.body;
      // console.log(req.body);
      // Check if all fields are provided
      if (!name || !email || !password  ) {
        return res
          .status(400)
          .json({ status: "failed", message: "All fields are required!" });
      }
      // Check if password and confirm password match
     
      // Check if the user already exists
      const existingUser = await UserModel.findOne({ email: email });
      if (existingUser) {
        return res
          .status(400)
          .json({ status: "failed", message: "Email already exists" });
      }
      // Check if the phone number already exists
     
      // Hashing the password
      const hashedPassword = await bcrypt.hash(password, 10);
      // Create a new user
      const userData = await UserModel.create({
        name,
        email,
       
        password: hashedPassword,
      });
      //   // Generating token and storing in cookies
      //   const token = jwt.sign({ ID: userData._id }, 'uqerhjf73h73jhd7');
      //   res.cookie("token", token, { httpOnly: true });

      // Return the created user data or a success message
      return res.status(201).json({
        status: "success",
        message: "User registered successfully",
        data: userData,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ status: "failed", message: "Internal server error" });
    }
  };

  static signIn = async (req, res) => {
    try {
      const { email, password } = req.body;

      // Validate required fields
      if (!email || !password) {
        return res.status(400).json({
          status: "failed",
          message: "Email and password are required.",
        });
      }

      // Find user by email
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(401).json({
          status: "failed",
          message: "You are not a registered user.",
        });
      }

      // Compare passwords
      const isMatched = await bcrypt.compare(password, user.password);
      if (!isMatched) {
        return res.status(401).json({
          status: "failed",
          message: "Invalid email or password.",
        });
      }

      // Generate JWT token
      const token = jwt.sign(
        { ID: user._id },
        "anuragkushwah9669907552asdfghjkzxcvbnm",
        { expiresIn: "1d" } // Optional: token expiration
      );

      // Set token in cookies
      res.cookie("token", token, {
        httpOnly: true, // Prevent access via client-side JavaScript
        // secure: process.env.NODE_ENV === "production", // Ensure cookies are only sent over HTTPS in production
        // maxAge: 24 * 60 * 60 * 1000, // 1 day
      });

      // Respond with success
      return res.status(200).json({
        status: "success",
        message: "Login successful.",
        token,
        user,
      });
    } catch (error) {
      console.error("Error during sign-in:", error);

      // Internal server error
      return res.status(500).json({
        status: "failed",
        message: "Internal server error.",
      });
    }
  };
}
module.exports = UserController;