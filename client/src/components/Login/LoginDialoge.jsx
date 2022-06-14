
import React, { useState, useEffect } from 'react';

import { Dialog, DialogContent, TextField, Box, Button, Typography, styled } from '@mui/material';



const Component = styled(DialogContent)`
    height: 70vh; 
    width: 90vh;
    padding: 0;
    padding-top: 0;
`;
// for th left  login dialog image
const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 40%;
    height: 100%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
`;

const LoginDialog = ({open ,setOpen})=> {

    const handleClose =()=> {
        setOpen(false);
    }

    return (
       <Dialog open={open} onClose={handleClose}>
        <Component>

        <Image>
            
        </Image>
        <Box> 
            <TextField variant="standard"  label="Enter Email/Mobile"/>
            <TextField variant="standard"  label="Passward"/>
            <TextField>By continuing , you agree to flipkar</TextField>
            <Button>Login</Button>
            <Typography>OR</Typography>
            <Button>Request OTP</Button>
            <Typography>New to flipkart Create an account</Typography>

        </Box>
        </Component>
 
       </Dialog>
    )
}

export default LoginDialog; // for the header login button