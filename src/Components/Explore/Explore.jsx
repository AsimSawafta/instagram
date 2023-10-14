import { Container, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import img1 from '../../assets/ExplorePics/explorePic1.avif'
import img2 from '../../assets/ExplorePics/explorePic2.avif'
import img3 from '../../assets/ExplorePics/explorePic3.avif'
import img4 from '../../assets/ExplorePics/explorePic4.avif'
import img5 from '../../assets/ExplorePics/explorePic5.avif'
import img6 from '../../assets/ExplorePics/explorePic6.avif'
import img7 from '../../assets/ExplorePics/explorePic7.avif'
import img8 from '../../assets/ExplorePics/explorePic8.avif'
import img9 from '../../assets/ExplorePics/explorePic9.avif'

import img10 from '../../assets/ExplorePics/explorePic10.webp'
import img11 from '../../assets/ExplorePics/explorePic11.webp'
import img12 from '../../assets/ExplorePics/explorePic12.webp'
import img13 from '../../assets/ExplorePics/explorePic13.webp'
const itemData = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13];

export default function Explore() {
  return (
    <Container maxWidth={"md"} sx={{ marginTop:3}}>
<ImageList sx={{ width: "100%", height: "99%" }} cols={3} >
      {itemData.map((item ,index) => (
        <ImageListItem key={index} >
          <img
            
            src={item}
            alt={"explore"}
            
          />
        </ImageListItem>
      ))}
    </ImageList>
   
    </Container>
  )
}
