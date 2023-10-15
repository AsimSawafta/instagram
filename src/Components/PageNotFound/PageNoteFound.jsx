import React from 'react'
import notFound from '../../assets/error-404-page-not-found-landing-page-concept-for-mobile-and-pc-free-vector.jpg'
import { Container } from '@mui/material'
export default function PageNoteFound() {
  return (
    <Container ma style={{width:"100%" ,display:"flex",alignItems:"center",justifyContent:"center" ,backgroundColor:"white"}} >
        <img style={{width:"100%"}}  src={notFound} alt="pageNotFound" />
    </Container>
  )
}
