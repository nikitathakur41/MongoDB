const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");
const app = express();
const bodyParser = require('body-parser');
//const authorrouter = require("./Routes/author_route");
const cors = require('cors')

app.use(express.json());
//app.use(bodyParser.json());


app.use(bodyParser.urlencoded({limit:'5000mb', extended:true, parameterLimit: 10000000000}));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/usersdb',
//mongoose.connect("mongodb+srv://nthakur:5lu8vkDO0YHgMQX4@cluster0.20ozrnm.mongodb.net/usersdb?retryWrites=true&w=majority" ,
{
    useNewUrlParser: true,

});


const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error: "));
db.once("open",function()
{
    console.log("Connected Successfully")
});

app.use(Router);

app.listen(3002,()=>{
    console.log("Server running at port 3002");
});


