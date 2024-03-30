// middleware function: token verification

const jwt=require('jsonwebtoken')

exports.middlewareFunction=(req,res,next)=>{
    console.log("________inside middleware function________");

    try{
        // token
        // `bearer ${token}`
        const token=req.headers['access_token'].split(" ")[1]

        // verify

        const jwtResponse=jwt.verify(token,process.env.JWT_SECRET_KEY)

        // store the user id payload in req payload

        req.payload=jwtResponse.uid

        next()
    }
    catch{
        res.status(401).json("Authentication failed please login again")
    }
}