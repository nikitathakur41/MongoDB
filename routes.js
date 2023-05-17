const express = require("express");
const newModel = require("./signmodel");
const userModel = require("./models");
//const userModel = require("./models/user");
//const storyModel = require("./models/story");
const authorModel = require("./models/author"); 
const productModel = require("./models/product");
//const author_controller = require("./controllers/author")
//const bodyParser = require("body-parser");
const jwt=require("jsonwebtoken")
const app = express();
const cors = require("cors");
const users = require("./models");
app.use(cors());

app.use(express.json());



// app.post("/add_user",async(request,response)=>{
//     const user = new userModel(request.body);

//     try{
//         await user.save();
//         response.status(200).send(user);
//        }
//        catch(error){
//         response.status(500).send(error);
//     }
// });
// app.get("/users",async(request,response)=>{
//     const user = await userModel.find({});
//     const userlen = user.length;

//     try{
//         response.send(user);
//        }
//        catch(error){
//         response.status(500).send(error);
//     }
// });

// app.get("/users/:age",async(request,response)=>{
//     const user = await userModel.find({});
//     const userlen = user.length;

//     try{
//         response.send({userlen:userlen,users:user});
//        }
//        catch(error){
//         response.status(500).send(error);
//     }
// });

// app.post("/add_user_story",(request,response)=>{
//     const user = new userModel(request.body);

//     try{
//          user.save();
//          const story = new storyModel({
//              user : user._id,
//              title : "Nikita first story"
//          });

//          try{
//              story.save();
//              response.send(story);
//          }catch(error){
//         response.status(500).send(error);
//        }
//        }catch(error){
//         response.status(500).send(error);
//     }
// });

// app.get("/get_user_story",(request,response) =>{
//     storyModel.find({title : "Nikita first Story"})
//     .populate("user").then( story =>{
//         response.send(story);
//     }) ; 
    

    
    
//     app.get('/',(req,res)=>{
//         return res.sendFile(__dirname + '/index.html');
//     });

    

//  // yeh comment hi  rkhna h 


//     //app.post("/add_author",author_controller.signUp);

    

//     app.post("/add_author",async(request,response)=>{
//         const author= new authorModel(request.body);
    
//         try{
//             await author.save();
//             response.status(200).send(author);
//            }
//            catch(error){
//             response.status(500).send(error);
//         }
//     }); 
//     app.get("/authors",async(request,response)=> {
//         const author=await authorModel.find({});
//         const authorlen=author.length;
//         try{
//             response.send(author);
//         }
//         catch(error){
//             response.status(500).send(error);
//             console.log("Added Successfully")
    
//         }
//     });
    // app.delete("/deleteauthors/:id",async(request,response)=> {
        
    //     try{
    //         const author=await authorModel.findByIdAndRemove(request.params.id);
    //         console.log(author)
    //         response.status(200).send(author);
    //         console.log("Deleted successfully")
    //     }
    //     catch(error){
    //         response.status(500).send(error);
    
    //     }
    // });
   
//     app.patch("/authors/:id",async(request,response)=> {
      
//         try{
//             const_id = request.params.id
//             console.log(_id)
//             const author=await authorModel.findByIdAndUpdate(_id,request.body,{
//             new: true
//         })
            
//             response.status(200).send(author);
//             console.log(author)
//         }
//         catch(error){
//             response.status(500).send(error);
    
//         }
//     });
   

//     app.post("/signin", async (request, response) => {
//         const newuser = new newModel(request.body)
//         const check_email = request.body.email
//         console.log(check_email)
//         const Password = request.body.password
//         console.log(Password)
//         try {
//             const author = await authorModel.findOne({ email: check_email })
//             if (!author) {
//                 return response.status(422).send('email or password invalid')
//             }
//             if (author.password == Password) {
//                 console.log("log in success");
//                 const token = jwt.sign({ id: author._id }, "nnnnnnnniiiiiikkkkkkkkiiiiiitttttaaaaaaaa", { expiresIn: 300, });
//                 const unique = new newModel({ token })
//                 unique.save()
//                 return response.status(200).send({ "name":author.name, "email":author.email , token})
//             }
//             else {
//                 return response.status(422).send('email or password invalid')
//             }
//         }
//         catch (error) {
//             console.log(error);
//             response.status(500).send(error);
//         }
//     });       

   



    ///new user
    
    app.post("/add_author", (request, response) => {
        const user = new userModel(request.body);
        //const user=new storyModel(request.body)
    
        try {
            user.save();
            const story = new storyModel({
                author: author._id,
                title: "niki story",
            });
            try {
                story.save();
                response.send(story);
            } catch (e) {
                response.status(500).send(error);
            }
    
            // response.status(200).send({user})
        } catch (error) {
            response.status(500).send(error);
        }
    });
    app.post("/add_authors",async(request,response)=>{
             const author = new authorModel(request.body);
        
            try{
               await author.save();
                response.status(200).send(author);
               }
               catch(error){
            response.status(500).send(error);
            }
     });
    
    app.put("/authors/:id", async (request, response) => { 
        console.log(41)
        console.log(request.params.id)
        console.log(request.body)
        try {
            const _id = request.params.id;
            const author = await authorModel.findByIdAndUpdate(_id, request.body, {
                new: true,
            });
            response.status(200).send(author);
            console.log(author);
        } catch (error) {
            response.status(500).send(error);
        }
    });
    app.patch("/authors/:id",async(request,response)=> {
      
                try{
                    const_id = request.params.id
                    console.log(_id)
                    const author=await authorModel.findByIdAndUpdate(_id,request.body,{
                    new: true
                })
                    
                    response.status(200).send(author);
                    console.log(author)
                }
                catch(error){
                    response.status(500).send(error);
            
                }
            });
           
    
    app.delete("/delauthors/:id", async (req, response) => {
        try {
            const id = req.params.id;
            const author = await authorModel.findByIdAndDelete(id);
            response.status(200).send(author);
        } catch (error) {
            response.status(500).send(error);
        }
    });
    
    app.get("/author", async (request, response) => {
        const authors = await authorModel.find({});
        //const userLen =users.length
        try {
            console.log(authors);
            response.send(authors);
            //response.send({userLen: userLen,users: users})
        } catch (error) {
            response.status(500).send(error);
        }
    }); 
    
    app.get("/authors/:id", async (request, response) => {
        
        try { 
            const id = request.params.id;
            const authors = await authorModel.findById(id);
            console.log(authors);
            response.send(authors);
            //response.send({userLen: userLen,users: users})
        } catch (error) {
            response.status(500).send(error);
        }
    });
    
    
    app.get("/authors_story", (req, res) => {
        storyModel
            .find({ title: "Niki first story" })
            .populate("author")
            .then((story) => {
                //if (err) return handleError(err);
                // console.log("the auther is %s",story.users.name);
                //console.log("hello")
                res.send(story);
            });
    });
    
    app.get("/", async (request, response) => {
        return response.sendFile(__dirname + "/index.html");
    });
    // app.post('/sign_up',user_controller.signup)
    
    app.post("/signupsend", (request, response) => {
        const author = authorModel(request.body);
        author.save();
        response.send(author);
        console.log(author);
    });
    
    app.post("/signin", async (request, response) => {
        const newauthor = new authorModel(request.body)
        const check_email = request.body.email
        console.log(check_email)
        const Password = request.body.Password
        console.log(Password)
        try {
            const author = await authorModel.findOne({ email: check_email })
            if (!author) {
                return response.status(422).send('email or password not found')
            }
            if (author.password == Password) {
                const token = jwt.sign({ id: author._id }, "jhgfhjfjfjfjhfygfghtjtydh", { expiresIn: 300, });
                const unique = new newModel({ token })
                unique.save()
                return response.status(200).send({ ...newauthor, unique })
            }
            else {
                return response.status(422).send('email or password not found')
            }
        }
        catch (e) {
            response.status(error).send(e);
        }
    } 
    
    ); 
    
    app.post("/authordata",async (request,response)=>{
        const {token}=request.body; 
        try{
            const tokenver=jwt.verify(token,"jhgfhjfjfjfjhfygfghtjtydh")
            const tokenemail=tokenver.email 
    
            tokenver.findOne({email:tokenemail})
            .then((data)=>{
                response.send({status:200,data:data})
            })
            .catch((error)=>{
                response.send({status:error,data:error })
            }) 
    
        }
        catch(error){
                  
        }
    });

    app.post("/add_product",async(request,response)=>{
        const product = new productModel(request.body);
   
       try{
          await product.save();
           response.status(200).send(product);
          }
          catch(error){
       response.status(500).send(error);
       }
});

app.get("/products", async (request, response) => {
    const products = await productModel.find({});
    try {
        console.log(products);
        response.send(products);
    } catch (error) {
        response.status(500).send(error);
    }
}); 

    
   
module.exports = app;

