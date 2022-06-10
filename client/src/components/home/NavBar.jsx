
import { navData  } from "../constants/data"

import { Box , styled , Typography } from '@mui/material'

// adding the row under the blue header. Looping through data object which holds
// 'url' and 'text'

const Component = styled(Box)`
display : flex;
margin : 55px 130px 0 130px;
text-align: center ; // aligns text and photo
`
const Container = styled(Box)`
padding : 9px 30px ;
`
const Text= styled(Typography)` 
font-size : 12px;
font-weight : 600; // Bold text
font-family : inherit;  // inherit parent font
`


const NavBar = ()=> {           //Navbar under header with number of items
    return (
        <Component>
            {
                navData.map(data=>(
                    <Container>
                        <img width='80' src={data.url} alt="nav"/>
                    
                        <Text>{data.text}</Text>
                    </Container>
                ))
            }
        </Component>
        
       
    )
}

export default NavBar