import React, { useContext, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { postsContext } from "../PostsContext/PostsContext";
import axios from 'axios';


export default function Layout() {
  let {user, setUser} = useContext(postsContext);
  const token=localStorage.getItem("token")
  async function a() {
    
      
    await axios
       .get(`http://16.170.173.197/users`, {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       })
       .then((response) => {
  
        
    
        setUser( response.data.users.filter((user)=>user.id==localStorage.getItem("myID")))

        console.log(user);   
       })
       .catch((error) => {
         console.log(error);
       });
   
  }
  useEffect(()=>{

    a()
  
  },[])
  return (
    <>
        <Sidebar/>
        <Outlet></Outlet>
        
    </>
  )
}
