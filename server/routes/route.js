import express from  'express'

const router = express.Router();

//login & signup
router.post('/signup', userSignUp); // function takes 2 parameters , A url and a call back function. function are defined in controller folder
router.post('/login', userLogIn);