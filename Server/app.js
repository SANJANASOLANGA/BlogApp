const express = require('express');
const mongoose = require('mongoose');
const recipeRouter = require('./routes/blog-routes.js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/blog', recipeRouter);

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

mongoose
  .connect('mongodb+srv://sanjanasolangaarachchi:WnQMY2bLReIw0LKU@recipe.pmdzzp3.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    app.listen(5000);
    console.log('Connected to database');
  })
  .catch((err) => {
    console.log(err);
  });

  require("./userDetails")

const User = mongoose.model("UserInfo")
app.post("/register", async (req, res) => {
    const { fname, lname, email, password, userType } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.json({ error: "User Exists" });
        // alert("User exists")
      }
      await User.create({
        fname,
        lname,
        email,
        password: encryptedPassword,
        userType,
      });
      res.send({ status: "ok" });
    } catch (error) {
      res.send({ status: "error" });
    }
  });

  