const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new mongoose.Schema({
    name: {
        type : String,
    
    },
    age: {
        type : Number,
        
    },
    role: {
        type : String,
    
    },
    profession: {
        type : String,
        
    },
    email:{
       type : String,
       //lowercase:true,
    },
    password:{
        type : String,
        
    }
    });

const Author = mongoose.model("Author",AuthorSchema);
module.exports = Author;






// const mongoose = require("mongoose");
// const Schema=mongoose.Schema;

// const AuthorSchema= new mongoose.Schema({
//     name:{
//         type: String,
//         required: true,
//     },
//     email:{
//         type: String,
//         required:true,
//     },
//     password:{
//         type: String,
//         required:true,
//     },
//     phone:{
//         type:Number,
//         required:true,
//     }
  
//   });
  
//   const Author=mongoose.model("Author", AuthorSchema);
//   module.exports=Author;
  