const express = require('express');
const mongoose = require('mongoose');
const recipeRouter = require('./routes/blog-routes.js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/blog', recipeRouter);

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

