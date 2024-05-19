const mongoose = require('mongoose');

const {Schema , model} = mongoose;

let blogSchema = new Schema({
    img : {
        type : String ,
        required : true ,
    } ,
    content : {
        type : String ,
        min : 20 ,
        required : true
    } ,
    likes : {
        type : Number
    } ,
    dislikes : {
        type : Number
    } ,
    comment : [
        {
            type : String ,
            min : 5 ,
            max : 200
        }
    ]
})

let Blog = model('blog' , blogSchema);

module.exports = Blog;