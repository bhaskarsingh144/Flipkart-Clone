import express from 'express'

// IN ROUTING WE DEFINE THEN WHEN AN API HITS A CERTAIN END POINT WHAT HAPPENS( A CERTAIN FUNCTION IS CALLED ETC)
// we only do routing the the "routes" folder and define the functions to be called in a different folder called controllers.
// HERE WHEN POST API HITS /signup userSignup is called

// IMPORTING FUCTIONS  ARE TO BE CALLED WHEN A PARTICULAR URL/ENDPOINT IS HIT
import { userSignUp , userLogIn } from '../controller/user-controller.js';

const Router = express.Router();

//login & signup
Router.post('/signup', userSignUp); 
// function takes 2 parameters , A url and a call back function. functions are defined in controller folder
// when user hits the "/signup" url/end point the  userSignup function is called.

Router.post('/login', userLogIn);

export default Router;