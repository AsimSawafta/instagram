import { Avatar, Button, Container, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import Input from '@mui/joy/Input';
import Button1 from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import Switch from '@mui/joy/Switch';
import { postsContext } from "../PostsContext/PostsContext";
import axios from 'axios';
export default function UpdateUser() {
const token=localStorage.getItem("token")
const [userName,setUserName]=useState("")
const [bio,setBio]=useState("")
const [password,setPassword]=useState("")
let {user} = useContext(postsContext); 
let formData = new FormData()
const [isChangingPassword, setIsChangingPassword] = useState(false);
const handleClickPassword = () => {
    setIsChangingPassword(!isChangingPassword);
  };

  const [switchStatus, setStatus] = useState("public");
  const toggleSwitch = () => {
    if (switchStatus === "public") {
      setStatus("private");
    } else {
      setStatus("public");
    }
    console.log(switchStatus);
  };

console.log(user);

  const [imgCovered, setImgCovered] = useState(null);
  const [img, setImg] = useState(null)
  const handleImagechange = (e) => {
    const file = e.target.files[0];
    setImg(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImgCovered(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.append("id", user.id);
    formData.append("bio", bio);
    formData.append("userName", userName?userName:user.userName);
    formData.append("status",switchStatus );
    formData.append("avatar", imgCovered);
    formData.append("password",password?password: user.password );

    axios.put(`http://16.170.173.197/users`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
       
        console.log(res.data);
        
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
console.log(user);
  return (
   <Container maxWidth="md" style={{color:"white" ,marginTop:"40px"}}>
    <Typography variant="h5" component="h5">
    Edit profile
    </Typography>
    <Container maxWidth="md">
      <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'black' , color:"white"}} >
      <ListItem alignItems="flex-start" style={{display:"flex"}}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={imgCovered} sx={{
    width: 100, 
    height: 100, 
  }}
 />
        </ListItemAvatar>
        <ListItemText style={{marginTop:"40px" ,marginLeft:"20px"}}
          primary={user.userName}
          secondary={
            <React.Fragment>
              <label htmlFor="image-upload">
                <i
                  variant="contained"
                  component="div"
                  style={{color:"#4b4b4b"}}

                >
                  change profile photo
                </i>
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={(event) => handleImagechange(event)}
                style={{ display: "none" }}
              />
            </React.Fragment>
          }
        />
      </ListItem> 
      <Divider variant="inset" component="li" />
      
    </List> 
    <form style={{marginTop:"20px"}}>
          <label>Change userName :</label>
          <Input placeholder="user name" 
          sx={{
    '--Input-focusedInset': 'var(--any, )',
    '--Input-focusedThickness': '0.25rem',
    '--Input-focusedHighlight': 'rgba(13,110,253,.25)',
    '&::before': {
      transition: 'box-shadow .15s ease-in-out',
    },
    '&:focus-within': {
      borderColor: '#86b7fe',
    },
    backgroundColor:"white"
    ,color:"black"
  }}
  onChange={(e)=>setUserName(e.target.value)}
/>

<label style={{marginTop:"20px" ,display:"inline-block"}}>Change bio :</label>
          <Textarea 
            minRows={2}
  size="lg"
   placeholder="user name" 
          sx={{
    '--Input-focusedInset': 'var(--any, )',
    '--Input-focusedThickness': '0.25rem',
    '--Input-focusedHighlight': 'rgba(13,110,253,.25)',
    '&::before': {
      transition: 'box-shadow .15s ease-in-out',
    },
    '&:focus-within': {
      borderColor: '#86b7fe',
    },
    backgroundColor:"white"
    ,color:"black"
  }}
  onChange={(e)=>setBio(e.target.value)}
/>
<Switch
    style={{marginTop:"20px"}}
    onClick={toggleSwitch}
        slotProps={{
          track: {
            children: (
              <React.Fragment>
                <Typography component="span" level="inherit" sx={{ ml: '8px' }}>
                public
                
                </Typography>
                <Typography component="span" level="inherit" sx={{ mr: '1px' }}>
                
                private
                </Typography>
              </React.Fragment>
            ),
          },
        }}
        sx={{
          '--Switch-thumbSize': '50px',
          '--Switch-trackWidth': '120px',
          '--Switch-trackHeight': '50px',
        }}
        
      />
         <div style={{marginTop:"20px"}}>
    <Button variant="contained" onClick={handleClickPassword}>Change Password?</Button>
      
      {isChangingPassword && (
        <div style={{marginTop:"20px"}}> 
       <Input color="neutral" placeholder="password" size="md" variant="solid"
       onChange={(e)=>setPassword(e.target.value)}
/>

        </div>
      )}
    </div>
    <Button1 type="submit" onClick={handleSubmit} style={{marginTop:"20px"}}>Submit</Button1>
    </form>
    </Container>
   </Container>
  )
}
