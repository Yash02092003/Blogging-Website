const express = require('express');
const app = express();
const PORT = 8080;
const mongoose = require('mongoose');
const path = require('path');
const seedData = require('./seed');
const blogRouter = require('./routes/blog');
const Blog = require('./model/Blog');
const methodOverride = require('method-override');
const passport = require('passport');
const passportLocal = require('passport-local');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const User = require('./model/User');
const authRouter = require('./routes/auth');



app.use(express.urlencoded({extended : true}));

mongoose.connect('mongodb://localhost:27017/Blog')
.then( () => {
    console.log('DataBase connected at Port 27017');
})
.catch( (err) => {
    console.log(err);
})

app.set('view engine' , 'ejs');

app.set('views' , path.join(__dirname , 'views'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.static(path.join(__dirname , 'public')));

app.use(methodOverride('_method'));

const sessionConfig = session({
    secret: 'weneedsomebettersecret',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/Blog', // Change this to your MongoDB URL
        touchAfter: 24 * 3600 // time period in seconds
    }),
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 1 week
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    }
})

app.use(sessionConfig);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new passportLocal(User.authenticate()));
app.use((req , res , next) => {
    res.locals.currentUser = req.user;
    next();
})

app.use(blogRouter);
app.use(authRouter);

app.get('/' , async (req , res) => {
    let blogs = await Blog.find({});
    res.render('home', {blogs});
})



// seedData();

app.listen(PORT , () => {
    console.log(`Server Connected to Port ${PORT}`);
})