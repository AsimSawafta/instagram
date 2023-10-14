import React from 'react'
import img from '../../../assets/StoriesAvatars/female-chef.png'
import Follow from './Follow'
import { Box} from '@mui/material'



export default function Sec2() {
  return (
   <Box sx={{marginTop:2 ,color:"white"}}>
    <Follow img={img} name={"asim"}/>
    <Box sx={{display:"flex", justifyContent: "space-between" , marginBottom:4}}>
        <span style={{color:"rgb(150, 150, 150)"}}>Suggestions for you</span>
        <span style={{color:"white"}} >See More</span>
    </Box>
    <Follow img={img} name={"asim"}/>
    <Follow img={img} name={"asim"}/>
    <Follow img={img} name={"asim"}/>
    <Follow img={img} name={"asim"}/>
    <div>
        <p style={{textAlign:"start",width:"80%" , fontSize:"11px"}}>About . Help . Press . API . Jobs . Privacy . Terms. Locations . Language . Meta Verified</p>
        <p style={{textAlign:"start" , fontSize:"13px"}}>© 2023 INSTAGRAM FROM META</p>
    </div>
   </Box>
  )
}
