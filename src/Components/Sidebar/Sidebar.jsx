
import React, { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import instaImage from "../../assets/instagram-logo.png";
import { Avatar, Button, Fade, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../Modal/Modal'
import img from '../../assets/WhatsApp Image 2023-10-06 at 12.46.31_5690597c.jpg'
import axios from "axios";
import Swal from "sweetalert2";
import { postsContext } from "../PostsContext/PostsContext";

export default function IconsSide() {

  let {user} = useContext(postsContext); 
  const token = localStorage.getItem('token');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);


  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
const n=useNavigate()
  const handleCloseoFLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("token")
    localStorage.removeItem("myID")
    localStorage.removeItem("name")
    n('/')

  };



 
function sweetAlert(){

  setAnchorEl(null);
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your Account has been deleted.',
        'success'
      )
      deleteAccount()
      n('/')
    }
  })
}

  /*..........................*/
  const [openModal, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false)
  }

  /////************************/////// */


  async function deleteAccount() {
    try {
     
      const response = await axios.delete('http://16.170.173.197/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAnchorEl(null);
      localStorage.removeItem("token")
      localStorage.removeItem("myID")
      localStorage.removeItem("name")
      console.log(response);
      
    } catch (error) {
      console.log(error);
    }
  }
  


  return (
    <List
      sx={{
        position: "sticky",
        borderRight: "1px solid rgb(53, 53, 53)",
        width: "100%",
        height: "100vh",
        maxWidth: 360,
        bgcolor: "black",
        color: "white",

        top: 0,

        zIndex: 55,

      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          style={{ backgroundColor: "black" }}
        >
          <img
            src={instaImage}
            alt="instagram"
            style={{
              backgroundColor: "black",
              width: "150px",
              marginTop: "10px",
            }}
          />
        </ListSubheader>
      }
    >
      <Link style={{ textDecoration: "none", color: "white" }} to={""}>
        <ListItemButton>
          <ListItemIcon>{<HomeIcon style={{ color: "white" }} />}</ListItemIcon>
          <ListItemText primary="Home" />

        </ListItemButton>
      </Link>

      <Link style={{ textDecoration: "none", color: "white" }} to={"Messages"}>
        <ListItemButton>
          <ListItemIcon>{<ChatIcon style={{ color: "white" }} />}</ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItemButton>
      </Link>

      <Link to={"Explore"} style={{ textDecoration: "none", color: "white" }}>
        <ListItemButton >
          <ListItemIcon>
            {<ExploreIcon style={{ color: "white" }} />}
          </ListItemIcon>
          <ListItemText primary="Explore" />
        </ListItemButton>
      </Link>

      <ListItemButton >
        <ListItemIcon>{<SearchIcon style={{ color: "white" }} />}</ListItemIcon>
        <ListItemText primary="search" />
      </ListItemButton>


      <ListItemButton onClick={handleClick} >
        <ListItemIcon>
          {<AddCircleOutlineIcon style={{ color: "white" }} />}
        </ListItemIcon>
        <ListItemText primary="create" />
      </ListItemButton>

      <Modal openModal={openModal} close={closeModal} />

      <ListItemButton >
        <ListItemIcon>
          {<SlideshowIcon style={{ color: "white" }} />}
        </ListItemIcon>
        <ListItemText primary="reals" />
      </ListItemButton>


      <ListItemButton >
        <ListItemIcon>
          {<FavoriteBorderIcon style={{ color: "white" }} />}
        </ListItemIcon>
        <ListItemText primary="Notifications" />
      </ListItemButton>

      <Link style={{ textDecoration: "none", color: "white" }} to={"Profile"}>
        <ListItemButton>
          <Avatar
            alt="Asim sawafta"
            sx={{ marginRight: 3, width: 30, height: 30 }}
            src={user.avatar}
            w
          />

          <ListItemText primary={user.userName} />

        </ListItemButton>
      </Link>
      <ListItemButton
        style={{ position: "absolute", bottom: "10px", color: "white" }}>
        <div>
          <Button
            id="fade-button"
            aria-controls={open1 ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open1 ? 'true' : undefined}
            onClick={handleClick1}
          >
            <ListItemIcon>{<MenuIcon style={{ color: "white" }} />}</ListItemIcon>
            <ListItemText style={{ color: "white", textTransform: "lowercase" }} primary="menu" />
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open1}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: 'right',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleCloseoFLogout}><Link style={{ textDecoration: 'none', color: "black" }} to={'/'}>Logout</Link></MenuItem>
            <MenuItem onClick={sweetAlert} ><Link style={{ textDecoration: 'none', color: "black" }}>deleteAccount</Link></MenuItem>
          </Menu>
        </div>
      </ListItemButton>



    </List>
  );
}

