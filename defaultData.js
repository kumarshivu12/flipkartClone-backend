import Product from "./database/model/productSchema.js";
import {products} from './constants/Data.js'

const defaultData=async ()=>{
    try {
        await Product.insertMany(products)   
        console.log('data inserted sucessfully...')
    } catch (error) {
        console.log('error while inserting default data',error.message)
    }
}
export default defaultData;