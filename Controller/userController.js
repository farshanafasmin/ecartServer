const users = require("../Models/userModel");

const jwt=require('jsonwebtoken')

exports.register = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const user = await users.findOne({ email })
        if (user) {
            res.status(400).json("user already exist,please login")
        }
        else {

            // create an obj for storing user data

            const newUser = new users({
                username, email, password  // both front and backend variable name are same

            })

            await newUser.save() //it will save in mongodb
            res.status(201).json(newUser)

        }
    }
    catch {
        res.status(400).json("register api failed")
    }
}


exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await users.findOne({ email, password })
        if (user) {

            // generate token
            const token=jwt.sign({uid:user._id},process.env.JWT_SECRET_KEY)
            res.status(200).json({user,token}) //token send to user along with user
        }
        else {
            res.status(401).json("incorrect email or password")
        }
    }
    catch {
        res.status(400).json("login api failed")
    }
}