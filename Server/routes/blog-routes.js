const express = require('express');
const { getAllblogs, addblog, updateblog, getById, deleteblog, getByUserId } = require('../controllers/blog-controller.js');

const blogRouter = express.Router();

blogRouter.get('/', getAllblogs);
blogRouter.post('/add', addblog);
blogRouter.put('/update/:id', updateblog);
blogRouter.get('/:id', getById);
blogRouter.delete('/:id', deleteblog);
blogRouter.get('/user/:id', getByUserId);

module.exports = blogRouter;
