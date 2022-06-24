import {Box , Button , Typography , styled} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import LoginDialog from '../Login/LoginDialoge';

import { useState , useContext } from 'react'; //hooks for login button
import { DataContext } from '../../context/DataProvider';

const  Wrapper =styled(Box)`
display : flex;
margin :0 3% auto;
& > button, & > p ,& > div{
    margin-right: 40px;
    font-size : 15px;
    align-items : centre;
}
`
const Container = styled(Box)`
display:flex ;
`
const LoginButton=styled(Button)`
color :#2874f0;
background : #FFFFFF;
text-transform : none;
padding :5px 40px;
border-radius = 2px;
font-weight :600;
height : 32px;
`



const CustomButton = () => {


    const {account} =useContext(DataContext)

    const [open, setOpen]= useState(false); // hook setup to change dialog open state 

    // this function is passed in the  the onClick jsx function
    const openDialog = ()=> {
        setOpen(true);
    }

    return (
        <Wrapper>
            { account ?
              <Typography>{account}</Typography> :
              <LoginButton variant='contained' onClick={()=>openDialog()} > Login </LoginButton>
        }
        



            
            <Typography style={{ marginTop : 3 , width : 135}}>Become a seller</Typography>

            <Typography style={{ marginTop : 3 }}>More</Typography>

            <Container>
                <ShoppingCart/>
                <Typography>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />

        </Wrapper>
    )
}
export default CustomButton