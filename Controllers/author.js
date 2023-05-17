const authorModel = require("../models/author");


exports.signUp=(request,response)=>{
    const author = new authorModel(request.body);

    try{
        author.save();
        response.status(200).send(author);
       }
       catch(error){
        response.status(500).send(error);
    }
};



// const authorModel=require('../models/author')

// exports.signup=async (request,response)=>{ 
    
//     const author= new authorModel(request.body)  
//     author.save() ; 
//     response.send(author)   
//     console.log(author)
// }



