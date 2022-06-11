import mongoose from "mongoose";


const Connection = async (username,passward) => { 
    
    const URL ='mongodb://bhaskarsingh144:Lucknow123@general-shard-00-00.dxr9a.mongodb.net:27017,general-shard-00-01.dxr9a.mongodb.net:27017,general-shard-00-02.dxr9a.mongodb.net:27017/?ssl=true&replicaSet=atlas-r28lu1-shard-0&authSource=admin&retryWrites=true&w=majority'
    try
    {
    await mongoose.connect(URL, {useUnifiedTopology :true , useNewUrlParser :true});
    console.log("database connected");
    } 
    catch (error)
    {
        
    console.log("NOT CONNECTED TO DB ",error.log);
    }

}  
export default Connection; 