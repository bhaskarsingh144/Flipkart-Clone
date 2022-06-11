// this is for validation of data which is being fetched. Validation as in whether the data has all the required fiedls
// we use mongoose for this which has a schema method

import mongoose from 'mongoose'

 // this is an object and was pass the parameter as an object as well.
const productschema= new mongoose.Schema(
{            
id: String,          // These fields need to match the feilds in the data.js
url: String,
detailurl: String,
title:Object,
price:Object,
quantity:Number,
description:String,
discount:String,
tagline:String


}
);               
 //Similar to how Mysql where we create new DB using CREATE DATABSE "NAME" , her we have to create new Database
   // in MongoDb. Its called collection in mongo db

   const Product = mongoose.model('product',productschema);

   export default Product;