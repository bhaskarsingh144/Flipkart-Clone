
import React, { useState, useContext } from 'react';

import { Dialog, DialogContent, TextField, Box, Button, Typography, styled } from '@mui/material';
import { DataContext } from '../../context/DataProvider';

import { authenticateLogin , authenticateSignup } from '../../service/api';
// authenticate function is called by the the signupUser function which is called by the onClick event on the Continue Button.


//                       ...................CSS OVERRIDING.....................
const Component = styled(DialogContent)`
    height: 80vh; 
    width: 83vh;
    padding: 0;
    padding-top: 0;

`;
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

// for the left  login dialog image
const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 25%;
    height: 83%;
    padding: 210.5px 45px;
    & > p , & > h5 {
        color: #FFFFFFF;
        font-weight :600;
    }
`

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;
const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const loginInitialValues = {
    username: '',
    password: ''
};
// object for initial values for signup text fields. Blank Initially
const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};
const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}
//                                ..........................MAIN COMPONENT..............................
//........................................................................................................................................

const LoginDialog = ({ open, setOpen }) => {
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const {setAccount} = useContext(DataContext);
    // this state is used to store the values inputted by user on TF. It is initially set with signupInitialValues/loginInitialValues  which is empty.
    // state is updated once the user passes data in the text fields and its sent to the
    // we pass this state i.e signup in the authenticateSignup api which eventually sends the data of the  signupInitialValues/loginInitialValues
    // in a post request for authentication of the backend.
    const [ error, showError] = useState(false);
    // used to change the state of the login dialog b/w login and signup. by default : LOGIN on click New user button
    // toggle account is called bt toggleSignup and accountInitialValues.signup is passed.
    const [ account, toggleAccount ] = useState(accountInitialValues.login); 

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }
    // GET VALUE THAT THE USER INPUTS
   // when we type anything in the text field , it triggers an event . iF WE GO TO EVENT THEN TARGET THEN value then this
   // value field contains the what has been typed in the text field hence e.target.value we can consolelog this as well to verify
    const onInputChange = (e) => {

        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(!response) 
            showError(true);
        else {
            showError(false);
            handleClose();
            setAccount(login.username);
        }
    }

    const signupUser = async() => {
// responsr contains the data retured by the api i.e authenticateSignup
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username);
    }
    


    const handleClose =()=> {
        setOpen(false);
        toggleAccount(accountInitialValues.login) 
        // CLICK LOGIN -> CLICK NEW USER -> CLOSE -> CLIKC LOGIN AGGAIN -> DIALOG STAYS ON NEW USER. TO FIX THIS WE CHANGE STATE
       //  ON  TO LOGIN ccountInitialValues.login BY USING THE HOOK.
    }
    //Login dialog signup and login setup . this is called by <CreatAccount>
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);  // on clicking new user button toggleSignup function is called which changes the state
    }

// .....................................RETURN..................................................................

    return (
       <Dialog open={open} onClose={handleClose}> 
        <Component>
        <Box style={{display : 'flex'}}>
        <Image>
        <Typography variant="h5"> {account.heading} </Typography>
        <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
        </Image>

       { account.view === 'login' ?  // setting condition for login dialoge box whether new user or old
            <Wrapper> 
            <TextField variant="standard"  label="Enter Email/Mobile"/>
            <TextField variant="standard"  label="Passward"/>
            <Text>By continuing , you agree to flipkart's Terms and Use of Privacy Policy</Text>
            <LoginButton>Login</LoginButton>
            <Typography style={{textAlign:'center'}}>OR</Typography>
            <RequestOTP>Request OTP</RequestOTP>
            <CreateAccount onClick={()=>toggleSignup() }>New to flipkart Create an account</CreateAccount>

    
        </Wrapper>
        :
        // THIS WRAPPER IF FOR NEW USER PAGE IN THE DIALOG ON LOGIN BUTTON
        // Here onchange function is used to fetch data inputted by the user, the value is obtained from the event
        // hence we pass 'e"
        // here the name field is used to differentiage between text-fields so we dont have to write and call different functions for
        // for each fields. so insted of "target.value.view" our input test will be in "target.value.name"
        <Wrapper>  
            
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname'/>
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
            <LoginButton onClick={() => signupUser()} >Continue</LoginButton>

        </Wrapper>
        // here the LoginButton component is for Continue Button. it called signupUser function which calls a api and transfers the 
        // data inputted into the text field into the authentication process

        }
        </Box>

        </Component>
 
       </Dialog>
    )
}

export default LoginDialog; // for the header login button