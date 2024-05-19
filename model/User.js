const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const {Schema , model} = mongoose;
const Blog = require('./Blog');

let UserSchema = new Schema({
    email : {
        type : String ,
    } ,
    likes : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "blog"
    }] ,
    dislikes : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "blog"
    }] ,
    created : [
        {
            type : mongoose.Schema.Types.ObjectId ,
            ref : "blog"
        }   
    ] ,
    saved : [
        {
            type : mongoose.Schema.Types.ObjectId ,
            ref : "blog"
        }
    ]
});

UserSchema.plugin(passportLocalMongoose);

let User = model('User' , UserSchema);

module.exports = User