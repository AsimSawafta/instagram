
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import saleswoman from '../../../assets/StoriesAvatars/saleswoman.png'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { Container } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { postsContext } from '../../PostsContext/PostsContext';
export default function RecipeReviewCard({ id, name, body, urlPhoto, likes }) {

  const token = localStorage.getItem("token")

  const { setHomePosts, setPosts } = useContext(postsContext)

  async function like1() {

    await axios.post(`http://16.170.173.197/posts/like/${id}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => axios.get(`http://16.170.173.197/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }))
      .then((res) => {
        const posts = res.data.posts;
        const myId = localStorage.getItem('myID')
        const myPosts = posts.filter(post => post.user.id === myId)
        setHomePosts(posts)
        setPosts(myPosts)
      }).catch((error) => {
        console.error(error)
      })

  }

  return (
    <Container style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "30px", marginBottom: "20px" }}>
      <Card sx={{ maxWidth: 450, bgcolor: "black", color: "white" }}>
        <CardHeader
          avatar={
            <div style={{
              display: "flex",
              justifyContent: "center",

              alignItems: "center"
            }}>
              <Avatar alt="Remy Sharp" src={saleswoman} style={{ border: "1px solid rgb(60, 221, 255)", padding: "2px" }} />
              <span style={{ marginLeft: "10px" }}>{name}</span>
            </div>
          }
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon sx={{ color: "white" }} />
            </IconButton>
          }


        />
        <CardMedia
          component="img"
          height="350"
          width="450"
          image={`${urlPhoto}`}
          alt="post photo"
          style={{ width: '450px' }}
        />
        <CardActions style={{ display: "flex", justifyContent: "space-between" }} disableSpacing>


          <div style={{ margin: 0, padding: 0 }}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon sx={{ color: likes.includes(localStorage.getItem("myID")) ? "red" : "white" }} onClick={like1} />
            </IconButton>
            <IconButton >
              <ModeCommentOutlinedIcon sx={{ color: "white" }} />
            </IconButton>
          </div>
          <div>
            <IconButton><TurnedInNotIcon sx={{ color: "white" }} /></IconButton>
          </div>

        </CardActions>
        <span style={{ display: "flex", marginLeft: "15px", padding: "0" }}>{likes.length} likes</span>
        <CardContent style={{ margin: 0, padding: "10px 13px" }}>
          <Typography variant="body2" color="white">
            <h4 style={{ padding: "0", margin: "0", marginBottom: "5px" }}>{name}</h4>
            <p style={{ padding: "0", margin: "0" }}>{body}</p>
          </Typography>
        </CardContent>


      </Card>
    </Container>
  );
}











// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';

// import FavoriteIcon from '@mui/icons-material/Favorite';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import saleswoman from '../../../assets/StoriesAvatars/saleswoman.png';
// import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
// import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
// import { Container } from '@mui/material';

// export default function RecipeReviewCard({ id, name, body, urlPhoto, likes }) {
//   const token = localStorage.getItem("token");
//   const myID = localStorage.getItem("myID");

//   const [color, setColor] = useState(likes.includes(myID) ? 'red' : 'white');
//   const [localLikes, setLocalLikes] = useState(likes);

//   const like1 = async () => {
//     try {
//       const response = await axios.post(`http://16.170.173.197/posts/like/${id}`, null, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (localLikes.includes(myID)) {
//         // User already liked the post, so we need to remove the like
//         setLocalLikes(localLikes.filter(userID => userID !== myID));
//         setColor('white');
//       } else {
//         // User didn't like the post, so we add the like
//         setLocalLikes([...localLikes, myID]);
//         setColor('red');
//       }

//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     setColor(localLikes.includes(myID) ? 'red' : 'white');
//   }, [localLikes, myID]);

//   return (
//     <Container style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "30px", marginBottom: "20px" }}>
//       <Card sx={{ maxWidth: 450, bgcolor: "black", color: "white" }}>
//         <CardHeader
//           avatar={
//             <div style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center"
//             }}>
//               <Avatar alt="Remy Sharp" src={saleswoman} style={{ border: "1px solid rgb(60, 221, 255)", padding: "2px" }} />
//               <span style={{ marginLeft: "10px" }}>{name}</span>
//             </div>
//           }
//           action={
//             <IconButton aria-label="settings">
//               <MoreHorizIcon sx={{ color: "white" }} />
//             </IconButton>
//           }
//         />
//         <CardMedia
//           component="img"
//           height="350"
//           width="450"
//           image={`${urlPhoto}`}
//           alt="post photo"
//           style={{ width: '450px' }}
//         />
//         <CardActions style={{ display: "flex", justifyContent: "space-between" }} disableSpacing>
//           <div style={{ margin: 0, padding: 0 }}>
//             <IconButton aria-label="add to favorites">
//               <FavoriteIcon sx={{ color: color }} onClick={like1} />
//             </IconButton>
//             <IconButton>
//               <ModeCommentOutlinedIcon sx={{ color: "white" }} />
//             </IconButton>
//           </div>
//           <div>
//             <IconButton>
//               <TurnedInNotIcon sx={{ color: "white" }} />
//             </IconButton>
//           </div>
//         </CardActions>
//         <span style={{ display: "flex", marginLeft: "15px", padding: "0" }}>{localLikes.length} likes</span>
//         <CardContent style={{ margin: 0, padding: "10px 13px" }}>
//           <Typography variant="body2" color="white">
//             <h4 style={{ padding: "0", margin: "0", marginBottom: "5px" }}>{name}</h4>
//             <p style={{ padding: "0", margin: "0" }}>{body}</p>
//           </Typography>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// }
