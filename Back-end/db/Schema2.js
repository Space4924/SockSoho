const mongoose=require('mongoose');
const cloneProduct=mongoose.Schema({
   name:String,
   price:String,
   category:String,
   company:String
})
module.exports=mongoose.model('clones',cloneProduct);