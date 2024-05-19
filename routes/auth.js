const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../model/User');



router.get('/register' , async (req , res) => {
    res.render('register');
})

router.post('/register' , async (req , res) => {
    try{
    let {username , email , password} = req.body;
    const user = new User({username , email});
    const newUser = await User.register(user , password);
    console.log(newUser);
    req.login(newUser , (err) => {
        if(err) {
            console.log(err);
            return res.redirect('/register');
        }
        return res.redirect('/blogs');
    })
    }
    catch(e){
        console.log(e);
        return res.redirect('/register');
    }
})

router.get('/login' , async (req , res) => {
    res.render('login');
})

router.post('/login' , passport.authenticate('local' , { failureRedirect : '/login' , failureMessage : true}) ,  async (req , res) => {
    res.redirect('/blogs');
})

router.get('/logout' , (req , res) => {
    req.logOut( (err) => {
        if(!err){
            return res.redirect('/blogs');
        }
        else{
            console.log(err);

        }
    })
})

module.exports = router