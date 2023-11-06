
import React from 'react'
import Storys from './Storys/Storys'
import Posts from './Posts/Posts'
import { Box,  Grid, Paper } from '@mui/material'
import Sec2 from './Section2/Sec2'
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#000',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Home() {
  return (
        <Box  sx={{bgcolor:"black" , marginLeft:"20px" , width:"100%"}}>
        <Grid container rowSpacing={0} columnSpacing={0}>
        <Grid item xs={7}>
          <div >
            <Storys />
            <Posts />
          </div>
          </Grid>

          <Grid item xs={4}>
          <Item>
          <div  style={{ marginLeft: '50px'  }}>
            <Sec2 />
          </div>
          </Item>
          </Grid>
          </Grid>
        </Box>
        
    
  )
}
