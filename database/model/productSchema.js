import mongoose from 'mongoose';

const productSchema= new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discout:String,
    tagline:String,
})
const Product=mongoose.model('products',productSchema);
export default Product;