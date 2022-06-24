import User from '../model/user-schema.js';


// Here userSignUp is backend api. All backend apis have a "req" and "res". 
// req contains the request from the front-end. URL, TYPE OF REQUEST, HEADERS etc
// 
export const userSignUp = async (request, response) => {
    try {
        
        // here we are comparing username which is same as the request username.
        //Collections.findOne method finds and returns one document that matches the given selection criteria
        //     db.Collection_Name.findOne( query:<document>, projection:<document>)

       // setting a check if a user name already exist.
        const exist = await User.findOne({ username: request.body.username });
        if(exist) {
            return response.status(401).json({ message: 'User already exist'});
        }
        const user = request.body; // this contains the body/structure of data entered by the user in text field in a OBJECT
        // THIS DATA THAT WE ARE GETTING FROM THE USER NEEDS TO VALIDATED        
        const newUser = new User(user);  // creating object for 'User' which is for Validation. 
        // User is a mongooes model for validation in which we pass the user request body/structures.
        await newUser.save();
        response.status(200).json({ message: user });
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const userLogIn = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if(user) {
            return response.status(200).json(`${request.body.username} login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}

