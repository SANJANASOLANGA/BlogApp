const BlogModel = require('../model/Blog.js');

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

