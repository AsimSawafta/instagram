import { Avatar, Box, Button, Stack, Tooltip } from '@mui/material'
import React from 'react'
export default function Follow({img,name}) {
  return (
    <Stack direction="row"
    spacing={2}
    sx={
        {
            color:"white",
           textAlign:"end",
            marginBottom: 3,
            gap:2,
            
        }
    }>
        <Box  sx={{display:"flex",gap:1}}>
        <Avatar sx={{border:"1px solid white" , width:50,height:50}}
        alt="Ramy"
        src={img}
       / >

        <Box sx={{marginRight:4}}>
        <div style={{textAlign:"start"}}>{name}</div>
        <div style={{color:"#969696"}}>Follow by asim</div>
        </Box>

        <Tooltip title="add" arrow>
            <Button sx={{textTransform:"lowercase"}}>follow</Button>
        </Tooltip>
        

        </Box>





    </Stack>
  )
}
