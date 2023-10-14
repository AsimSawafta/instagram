
import {
  Button,
  Container,
  ImageList,
  ImageListItem,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Post.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { useRef } from "react";
import { postsContext } from "../PostsContext/PostsContext";
export default function Posts({ setNumberOfPosts }) {
  const token = localStorage.getItem("token");
  const { posts, setPosts, setHomePosts } = useContext(postsContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // Add selectedItem state
  const [description, setDescription] = useState("");
  const open = Boolean(anchorEl);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "1px solid #1D1D1D",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", // Center everything horizontally and vertically
    bgcolor: "#1D1D1D",
    transition: "5s",
  };

  const buttonStyle = {
    width: "50%",
    borderRadius: "20px",
    margin: "10px 0",
  };


  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedItem(id); // Store the item.id when the menu is opened
    console.log(id)
  };




  async function Delete() {
    console.log(selectedItem);
    // You can now make your axios.delete request here

    try {
      await axios.delete(`http://16.170.173.197/posts/${selectedItem}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const res = await axios.get(`http://16.170.173.197/posts/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const posts = res.data.posts;
      const myId = localStorage.getItem('myID')
      const myPosts = posts.filter(post => post.user.id === myId)
      setHomePosts(posts)
      setPosts(myPosts)
    } catch (err) {
      console.log(err);
    }



    setAnchorEl(null);
  }

  async function getMyPosts() {
    await axios.get(`http://16.170.173.197/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        const posts = response.data.posts;
        const myId = localStorage.getItem('myID')
        const myPosts = posts.filter(post => post.user.id === myId)
        setHomePosts(posts)
        setPosts(myPosts)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getMyPosts()

  }, []);

  async function edit() {
    await axios.put(`http://16.170.173.197/posts/${selectedItem}`,
      { description: description },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then(() => axios.get(`http://16.170.173.197/posts/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })).then(res => {
        const posts = res.data.posts;
        const myId = localStorage.getItem('myID')
        const myPosts = posts.filter(post => post.user.id === myId)
        setHomePosts(posts)
        setPosts(myPosts)
      })
  }


  const [openEdit, setOpenEdit] = useState(false)
  const handleClose = () => {
    setAnchorEl(null);

  };

  const openModal = () => {

    setOpenEdit(true);
  };

  function changeDescription() {
    edit()
    setOpenEdit(false);
  }


  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenEdit(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  setNumberOfPosts(posts.length);
  return (
    <>
      <Modal
        open={openEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} ref={modalRef} >
          <Typography sx={{ marginBottom: 3 }} variant="h6" component="h2">
            Edit
          </Typography>
          <form action="">
            <p style={{ margin: "4px 0", fontSize: "13px" }}>description</p>
            <label style={{ marginBottom: "5px" }}>
              <textarea
                style={{
                  width: "300px",
                  borderRadius: "10px",
                  height: "90px",
                  marginBottom: "15px",
                  backgroundColor: "#4D4D4D",
                  border: "1px solid #FFFFFF",
                  color: "white",
                }}

                onChange={(e) => setDescription(e.target.value)}

              />
            </label>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>



              <Button
                type="submit"
                onClick={changeDescription}
                variant="contained"
                sx={buttonStyle}
                style={{ backgroundColor: "rgb(77, 77, 77)" }}
              >
                Post
              </Button>
            </div>
          </form>
        </Box>
      </Modal>


      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={Delete}>Delete</MenuItem>
        <MenuItem onClick={openModal}>Edit</MenuItem>
      </Menu>

      <Container maxWidth={"sm"}>
        <ImageList sx={{ width: "100%", height: "96%" }} cols={3} space={5}>
          {posts.map((item, index) => (
            <div key={index} className="image-container" style={{ margin: "0 5px" }}>
              <div className="hover-div">
                <div>
                  <Button
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={(event) => handleClick(event, item.id)}
                  >
                    <DehazeIcon style={{ color: "white" }} />
                  </Button>
                </div>
              </div>
              <ImageListItem>
                <img
                  style={{ height: "200px" }}
                  src={item.image}
                  alt="myPost"
                />
              </ImageListItem>
            </div>
          ))}
        </ImageList>
      </Container>
    </>
  );
}
