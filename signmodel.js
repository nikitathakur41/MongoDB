const mongoose=require('mongoose') 

const AuthorSchema= new mongoose.Schema({ 

    token:{
        type:String,
        required:true
    }
        
    });

    const authortoken=mongoose.model("authortoken",AuthorSchema) 

    module.exports=authortoken;