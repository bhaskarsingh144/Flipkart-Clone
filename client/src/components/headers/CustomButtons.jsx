import {Box , Button , Typography , styled} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const  Wrapper =styled(Box)`
display : flex;
`
const CustomButton = () => {
    return (
        <Wrapper>
            <Button variant='contained'>Login</Button>
            <Typography>Become a seller</Typography>
            <Typography>More</Typography>

            <Box>
                <ShoppingCart/>
                <Typography>Cart</Typography>
            </Box>

        </Wrapper>
    )
}
export default CustomButton