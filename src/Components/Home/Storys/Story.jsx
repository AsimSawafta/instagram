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
        alignItems:"center"}}> 
      <Avatar alt="Remy Sharp" src={photo} style={{ border:"1px solid rgb(60, 221, 255)", padding:"10px"}}  />
      <span style={{ fontSize: '12px',userSelect:"none" }} >{firstName}</span>
      

      
      </div>
     
  )
}
