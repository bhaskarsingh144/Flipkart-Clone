// this file is for back and forth transfer of data to/from MongoDB

import Product from "./model/product-schema";
import { products } from "./database/constants/data";

const DefaultData = ()=> {
    try{

    }
    catch(error){
console.log("errorn while fetching default data", error.message)
    }
}