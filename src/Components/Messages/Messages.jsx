
import React from 'react'
import Friends from './Friends'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import messengarIcon from '../../assets/messengar-logo.png'
export default function Messages() {
  return (
   
    
    <Box sx={{width:"100%"}}>
        <Grid container rowSpacing={0} columnSpacing={0}>
        <Grid item xs={3.5} 
         >
        <Box sx={{height:"100vh",color:"white" , justifyContent:"center", borderRight:"1px solid rgb(53, 53, 53)"}}>
       <Stack width={"80%"} direction="row" sx={{p:3.5, justifyContent:"space-between",borderBottom:"1px solid rgb(53, 53, 53)" }} >
       <Box sx={{display:"flex"}}>
        <Typography >asim sawafta</Typography>
        <KeyboardArrowDownSharpIcon/>
        </Box>
        <Box>
            <RateReviewOutlinedIcon/>
        </Box>
       </Stack>
       
        <Box>
            <Stack direction="row" width={"90%"} justifyContent={"space-between"}>
                <Typography>Messages</Typography>
                <Typography sx={{color:"rgb(93, 93, 93)"}}>Request</Typography>
            </Stack>

        </Box>
        <Friends/>
        <Friends/>
        <Friends/>
        <Friends/>
        <Friends/>
    </Box>
       
          </Grid>

          <Grid item xs={8}>
          
            <Box width={"100%"} height={"100%"} sx={{display:"flex",justifyContent:"center", flexDirection:"column", alignItems:"center" , color:"white"}}>
            <img src={messengarIcon} alt='messengarIcon'/>
            <Typography paddingTop={2} variant="h5" component="h6">Your Messages</Typography>
              <Typography paddingTop={2} fontSize={"13px"} color={"rgb(150, 150, 150)"}>Send private photos and messages to a friend or group</Typography>
              <Button style={{marginTop:"20px" ,padding:"4px 18px" ,borderRadius:"15px"}} variant="contained">Send message</Button>
          </Box>
          
          </Grid>
          </Grid>
        </Box>
    
  
  )
}
