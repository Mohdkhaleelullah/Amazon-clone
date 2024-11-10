const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema({
    title:String,
    imageUrl:String,
    price:Number,
    rating:Number,

});

module.exports=mongoose.model('products',ProductSchema);