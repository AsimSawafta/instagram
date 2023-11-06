import React, { useContext, useEffect} from 'react'
import Post from './Post'
import { Container } from '@mui/material'
import axios from 'axios'
import Modal from '../../Modal/Modal'
import img from '../../../assets/StoriesAvatars/driver.png'
import { postsContext } from '../../PostsContext/PostsContext'
export default function Posts() {

  const token = localStorage.getItem("token")

  const { homePosts: posts, setHomePosts: setPosts } = useContext(postsContext)




  function getPosts() {
    axios.get("http://16.170.173.197/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setPosts(response.data.posts);
     
      
    }).catch((error) => {
      console.error(error)
    })

  }




  useEffect(() => {
    getPosts()
  }, [])

console.log(posts[0]);

  return (
    <div  >
      <Container>

        {

          posts ? [...posts].reverse().map((posts, index) => <Post key={index} id={posts.id} name={posts.user.userName} body={posts.description} urlPhoto={posts.image} likes={posts.likes} avatar={posts.user.avatar=="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"?img:posts.user.avatar} />
          ) : ""
        }
        <Modal data={setPosts} />
      </Container>
    </div>
  )
}
