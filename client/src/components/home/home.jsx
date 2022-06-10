
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box , styled } from "@mui/system";

import {Fragment} from 'react'

const Component= styled(Box)`
padding : 10 px 20 px;
background :#F2F2F2;
`
const Home = () =>{
    return (                     
        <Fragment>
        <NavBar/>
        <Component >
        <Banner/>
        </Component>
       
        </Fragment>
    )
}

export default Home;

// Fragment does not create a new extra node . As we know react returns only one parent component we wrap
// NavBar and Banner in a Fragmant instead of div