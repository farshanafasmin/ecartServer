const mongoose = require('mongoose')

// create schema

const userSchema = {

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}


// model

const users = mongoose.model("users", userSchema)

// export model

module.exports = users