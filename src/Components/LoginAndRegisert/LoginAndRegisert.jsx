import {  Grid } from '@mui/material'
import React from 'react'
import img1  from '../../assets/iPhoneScreen.png'
import img2 from '../../assets/androidScreen.png'
export default function LoginAndRegisert() {

    const containerStyle = {
        width:"60%",
        position: 'relative',
      };
    
      const overlayStyle = {
        width:"100%",
        position: 'absolute',
        top: '0',
        left: '10px',
      };
  return (
    <Grid item xs={6} md={6} style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
    <div style={containerStyle}>
  <img
    src={img2}
    alt="Background"
    style={{ width: '70%' }}
  />
  <img
    src={img1}
    alt="Overlay"
    style={overlayStyle}
  />
</div>
    </Grid>
    
    
  )
}
