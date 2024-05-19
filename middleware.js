const multer = require('multer');
const storage = multer.diskStorage({
    destination : function (req , file , cb){
        return cb(null , './uploads')
    } ,
    filename : function(req , file , cb){
        return cb(null , `${Date.now()}`+ `-` + `${file.originalname}`);
    }
})

const upload = multer({storage : storage});

const isLoggedIn = (req , res , next) => {
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    else{
        next();
    }
}

const isCreated = (req , res , next) =>{
    let { id } = req.params;
    if(req.user.created.includes(id)){
        return next();
    }
    else{
        return res.redirect('/blogs');
    }
}





module.exports = {isLoggedIn , upload , isCreated};