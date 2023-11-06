import React from 'react'
import Avatar from '@mui/material/Avatar';
export default function Story({photo, name}) {
  const a = name.split(' ');
  const firstName = a[0];



  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
        ,textAlign:"center"}}> 
      <Avatar alt="Remy Sharp" src={photo} sx={{width:60,height:60,border:"1px solid white"}}  />
      <span style={{ fontSize: '12px',userSelect:"none" }} >{firstName}</span>
      

      
      </div>
     
  )
}
