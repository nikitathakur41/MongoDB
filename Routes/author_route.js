const express = require("express");
const author_controller = require("./Controllers/author");
const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.urlencoded({limit:'5000mb', extended:true, parameterLimit: 10000000000}));

// app.get("/authors",author_controller.signUp);
app.post("/sign_up",author_controller.signUp);



// module.exports = app;







// const express=require('express') 
// const cors = require('cors')
// const app=express() 
// app.use(cors());

// app.use(express.json())
// app.get("/",async(request,response)=>{ 
   
//     return response.sendFile(__dirname+'/index.html')

// })   
// app.post('/sign_up',user_controller.signup)
