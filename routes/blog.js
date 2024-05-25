const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../model/Blog');
const router = express.Router();
const {upload , isLoggedIn , isCreated} = require('../middleware');
const User = require('../model/User');


router.get('/blogs' , async (req , res) => {
    let blogs = await Blog.find({});
    res.render('index' , {blogs});
})

router.get('/blogs/new' , isLoggedIn , (req , res) => {
    res.render('new');
})

router.post('/blogs/new' , isLoggedIn ,  upload.single('img') ,  async (req , res) => {
    let {content} = req.body;
    let blog = await Blog.create({img : `/uploads/${req.file.filename}` , content , likes : 0 , dislikes : 0 , comment : []});
    let user = await User.findById(req.user._id);
    user.created.push(blog);
    user.save();
    res.redirect('/blogs');
})

router.get('/blogs/:id' , async (req , res) => {
    let {id} = req.params;
    let blog = await Blog.findById(id);
    res.render('show' , {blog});
})

router.get('/blogs/:id/edit' , isLoggedIn , isCreated ,  async (req , res) => {
    let {id} = req.params
    let blog = await Blog.findById(id);
    res.render('edit' , {blog});
})

router.patch('/blogs/:id/edit' , isLoggedIn , isCreated , upload.single('img') , async (req , res) => {
    if(req.file){
        const { id } = req.params;
        const { content } = req.body;
        await Blog.findByIdAndUpdate(id , {img : `/uploads/${req.file.filename}` , content});
        res.redirect('/blogs');
    }
    else{
        const { id } = req.params;
        const { content } = req.body;
        await Blog.findByIdAndUpdate(id , {content});
        res.redirect('/blogs');
    }
})


router.delete('/blogs/:id' , isLoggedIn , isCreated , async (req , res) => {
    let { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.redirect('/blogs');
})

router.get('/blogs/:id/like' , isLoggedIn ,  async (req , res) => {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    const user = await User.findById(req.user._id);
    const isLiked = user.likes.includes(id);
    if(isLiked){
        blog.likes = blog.likes - 1;
        blog.save();
        await User.findByIdAndUpdate(req.user._id , {
            $pull : {likes : id}
        })

    }
    else{
        blog.likes = blog.likes + 1;
        blog.save();
        await User.findByIdAndUpdate(req.user._id , {
            $addToSet : {likes : id}
        })
        
    }
    res.json({likes : blog.likes})
})


router.get('/about' , (req , res) => {
    res.render('about');
})

router.get('/contact' , (req , res) => {
    res.render('contact');
})

router.get('/privacy' , (req , res) => {
    res.render('privacy');
})

router.post('/blogs/:id/comment' , isLoggedIn ,  async (req , res) => {
    let { id } = req.params;
    let { comment } = req.body;
    let blog = await Blog.findById(id);
    blog.comment.push(comment);
    blog.save();
    res.render('show' , {blog});
})

router.get('/user' , isLoggedIn , async (req , res) => {
    let user = await User.findById(req.user._id);
    await user.populate('likes');
    await user.populate('created');
    await user.populate('saved');
    console.log(user);
    res.render('user' ,{user});
})

module.exports = router;