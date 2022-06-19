import express from 'express'


// IMPORTING FUCTIONS  ARE TO BE CALLED WHEN A PARTICULAR URL/ENDPOINT IS HIT
import { userSignUp , userLogIn } from '../controller/user-controller.js';

const Router = express.Router();

//login & signup
Router.post('/signup', userSignUp); 
// function takes 2 parameters , A url and a call back function. functions are defined in controller folder
// when user hits the "/signup" url/end point the  userSignup function is called.

Router.post('/login', userLogIn);

export default Router;