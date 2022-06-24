import mongoose from 'mongoose';

// defining input data structure from the text field
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    }
});
// creating model for validation and passing the previous object which is userSchema
// unction of the mongoose module is used to create a collection of a particular database of MongoDB. 
//The name of the collection created by the model function is always in plural format mean GFG to gfss 
// and the created collection imposed a definite structure.
// mongoose.model(<Collectionname>, <CollectionSchema>)
// This function returns the Mongoose object.
const User = mongoose.model('user', userSchema);

export default User;