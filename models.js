const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
    },
    
    email: {
        type : String,
    
    },
    password: {
        type : String,
    
    },
    
    

    });

const users = mongoose.model("users",UserSchema);

module.exports = users;