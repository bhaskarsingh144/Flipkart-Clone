// this file is for back and forth transfer of data to/from MongoDB

import Product from "./model/product-schema.js";
import { products } from "./database/constants/data.js";

const DefaultData = async ()=> {
    try{
        await Product.deleteMany({});
       await Product.insertMany(products) ;// products is the main object in data.js
        console.log("Data Imported Successfully");

    }
    catch(error){
console.log("error while fetching default data", error.message)
    }
}
export default DefaultData;