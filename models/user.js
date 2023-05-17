const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
    },
    age: {
        type : Number,
        default :0,
    },
    role: {
        type : String,
        default :"QA",
    },
    email:{
        type: String,
    },
    password:{
        type:String,
    },
    profession: {
        type : String,
        default :"Developer",
    },
    
    stories:[
        {
            type: Schema.Types.ObjectId,
            ref:"Story"
        }
    ],

    });

const User = mongoose.model("User",UserSchema);

module.exports = User;