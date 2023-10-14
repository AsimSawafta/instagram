import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

import LoginAndRegisert from '../LoginAndRegisert/LoginAndRegisert'
export default function Layout() {

  return (
    <>
    <Container >
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
       
        <LoginAndRegisert/>
       
        <Grid item xs={6} md={6}>
        <Outlet></Outlet>
       </Grid>
        
      </Grid>
    </Box>
    
    </Container>
       
        

    </>
  )
}
