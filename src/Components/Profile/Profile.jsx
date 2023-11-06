import React, { useContext, useState } from "react";
import Typography from '@mui/material/Typography';
import { Avatar, Container, Button, Stack } from "@mui/material";
// import img from "../../assets/WhatsApp Image 2023-10-06 at 12.46.31_5690597c.jpg";
import MyTabs from './Tabs';
import Posts from "./Posts";
import { Link } from "react-router-dom";
import { postsContext } from "../PostsContext/PostsContext";


export default function Profile() {
  const [numberOfPosts, setNumberOfPosts] = useState(0)
  let {user} = useContext(postsContext)
  console.log(user);
  return (
    <Container
      maxWidth="lg" style={{ color: "white", display: "flex", flexDirection: "column", alignItems: "center", }}
    >


      {/* my photo , name and folowors */}
      <Stack spacing={2} direction="row" style={{ color: "white", borderBottom: "1px solid rgb(53, 53, 53)", padding: "0 100px" }}>

        <Stack spacing={2} direction="row" style={{ alignItems: "center", justifyContent: "center", marginRight: "50px" }}>
          <Avatar
            alt="Asim sawafta"
            sx={{ m: 5, width: 130, height: 130, alignItems: "center", justifyContent: "center" }}
            src={user.avatar}
            
          />

        </Stack>


        <Stack className="part1" style={{ marginTop: "30px ", marginLeft: "50px" }} spacing={2}>

          <Stack spacing={2} direction="row">
            <Typography style={{ fontSize: "20px", fontWeight: "12px" }}>{user.user}</Typography>
            <Button
              sx={{ height: 30, bgcolor: "white" }}
              style={{ color: "black", borderRadius: "10px", fontSize: "12px", fontWeight: "8px" }}
            >
             <Link to={"updateUser"}>Edit profile</Link> 
            </Button>
            <Button
              sx={{ height: 30, bgcolor: "white" }}
              variant="outlined"
              style={{ color: "black", borderRadius: "10px", fontSize: "12px", fontWeight: "8px" }}
            >
              View actions
            </Button>
          </Stack>


          <Stack spacing={2} direction="row" style={{ justifyContent: "space-between" }}>
            <Typography style={{ fontSize: "15px" }}>{numberOfPosts} posts</Typography>
            <Typography style={{ fontSize: "15px" }}>268 followers</Typography>
            <Typography style={{ fontSize: "15px" }}>269 following</Typography>
          </Stack>


          <Stack spacing={2} style={{ alignItems: "start", marginBottom: "20px" }}>
            <Typography style={{ fontSize: "15px", padding: "0", margin: "0" }}>{user.bio}</Typography>
            
          </Stack>
        </Stack>
      </Stack>
      <MyTabs />
      <Posts setNumberOfPosts={setNumberOfPosts} />


    </Container>
  );
}