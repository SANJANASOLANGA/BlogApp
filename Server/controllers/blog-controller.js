const mongoose = require('mongoose');
const BlogModel = require('../model/Blog.js');
const User = require('../model/User.js');

exports.getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await BlogModel.find().populate('user');
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  if (!blogs) {
    return res.status(404).json({ message: 'No Recipe Found' });
  }
  return res.status(200).json({ blogs });
};

exports.addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  let existingUser;
  try {
    existingUser = await User.findById(user);
    console.log('existingUser is ', existingUser)
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  if (!existingUser) {
    return res.status(400).json({ message: 'Unable to find user' });
  }

  const blog = new BlogModel({
    title,
    description,
    image,
    user,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    existingUser.blogs.push(blog);
    console.log('existingUser is ', existingUser)
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log('existingUser is ', existingUser)
    console.log('error 1 is ', err);
    return res.status(500).json({ message: err });
  }
  return res.status(200).json({ blog });
};

exports.updateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  const blogId = req.params.id;
  let blog;
  try {
    blog = await BlogModel.findByIdAndUpdate(blogId, {
      title,
      description,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  if (!blog) {
    return res.status(500).json({ message: 'Unable to update' });
  }
  return res.status(200).json({ blog });
};

exports.getById = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await BlogModel.findById(id);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  if (!blog) {
    return res.status(404).json({ message: 'No Blog Found' });
  }
  return res.status(200).json({ blog });
};

