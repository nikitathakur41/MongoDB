const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        type : String,
    
    },
    price: {
        type : Number,
        
    },
    category: {
        type : String,
    
    },
    userId: {
        type : String,
        
    },
    company:{
        type:String,
    }
    
    });

const product = mongoose.model("product",productSchema);
module.exports = product;
