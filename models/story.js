const mongoose=require("mongoose") 
const Schema =mongoose.Schema;

const StorySchema =new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId, 
        ref: "User" 
    },
        title:{
            type:String,
        }
}) 

const story=mongoose.model("story",StorySchema)  
module.exports=story 








// const mongoose = require("mongoose");

// const Schema =  mongoose.Schema;

// const StorySchema = new mongoose.Schema({
//     user : {
//         type : Schema.Types.ObjectId,
//         ref : "User"
//     },
//     title : {
//         type:String,
//     },
// });


// const Story = mongoose.model("Story",StorySchema)

// module.exports = Story;
