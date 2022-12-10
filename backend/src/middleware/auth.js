const Jwt = require('jsonwebtoken');
const jwtKey = "feedback_gen";

const verifyToken =(req, res, next)=>{
    //console.warn(req.headers['authorization'])
    let token = req.headers['authorization'];
    if(token){
        token = token.split(' ')[1];
        Jwt.verify(token, jwtKey, (err, valid)=>{
            if(err){
                return res.status(401).json({success:false, message:'Please provide a valid token' });
            }else{
                next();
            }
        })
    }else{
         return res.status(403).json({success:false, message:'A token is required for authentication' });
    }
}

module.exports = verifyToken;