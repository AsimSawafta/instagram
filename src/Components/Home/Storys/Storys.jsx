
import Stack from '@mui/material/Stack';
import driver from '../../../assets/StoriesAvatars/driver.png'
import farmer from '../../../assets/StoriesAvatars/farmer-avatar.png'
import female from '../../../assets/StoriesAvatars/female-chef.png'
import flight from '../../../assets/StoriesAvatars/flight-attendant.png'
import graduated from '../../../assets/StoriesAvatars/graduated-student.png'
import saleswoman from '../../../assets/StoriesAvatars/saleswoman.png'
import Story from './Story';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
export default function ImageAvatars() {
  const token = localStorage.getItem("token")
  const[posts,setPosts]= useState([])

  useEffect(()=>{

    axios.get("http://16.170.173.197/posts",{
      headers: {
        Authorization:`Bearer ${token}`,
      },
    }).then((response)=>{
       
      setPosts(response.data.posts);
    }).catch((error)=>{
      console.error(error)
    })
    

  },[posts])


  return (

    <Stack maxWidth={750} style={{marginTop:"20px"  , color:"white" ,borderBottom:"1px solid rgb(53, 53, 53) " , paddingBottom:"10px",width:"100%"}} direction="row" spacing={2}>
     
     <Swiper
      spaceBetween={50}
      slidesPerView={8}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        posts.map((post) =>{
          return (<SwiperSlide><Story  photo={driver} name={post.user.userName}/></SwiperSlide>)
        })
      }
      
    </Swiper>
    </Stack>
    
  );
}