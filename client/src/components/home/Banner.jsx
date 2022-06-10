//

import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

import { bannerData } from '../constants/data';

import { styled } from '@mui/material';
import { height } from '@mui/system';

const Image = styled('img')({
    width : '100%' ,
    height: 280

})

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = ()=>
{
    return (
       <Carousel swipeable={false}     // Carousle Classes https://www.npmjs.com/package/react-multi-carousel
       draggable={false}
       responsive={responsive} 
       dotListClass="custom-dot-list-style"
       itemClass="carousel-item-padding-40-px" 
       containerClass="carousel-container"
       infinite={true}
       autoPlaySpeed={4000}
       >
       

        {
            bannerData.map(data=> (
                <Image src={data.url} alt="banner" />
            ))
        }

       </Carousel>
    )
}

export default Banner