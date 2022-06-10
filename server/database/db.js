import mongoose from "mongoose";

const Connection = async () => { 
    const URL ='mongodb://bhaskarsingh144:#Lucknow123@cluster0-shard-00-00.dxr9a.mongodb.net:27017,cluster0-shard-00-01.dxr9a.mongodb.net:27017,cluster0-shard-00-02.dxr9a.mongodb.net:27017/?ssl=true&replicaSet=atlas-25owq6-shard-0&authSource=admin&retryWrites=true&w=majority'
    try
    {
    await mongoose.connect(URL, {useUnifiedTopology :true , useNewUrlParser :true});
    console.log("database connected");
    } 
    catch (error)
    {
        
    console.log(error);
    }

}  
export default Connection; 