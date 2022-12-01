import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Typography,
  Button,
  Grid
} from '@mui/material'
import { CardPost } from './CardPost'
import { likePost, getPosts } from '../api'

const Home = () => {
  const [posts, setPosts] = useState([])

  const onLike = async (idPost, userEmail) => {
    const res = await likePost(idPost, userEmail)
    console.log(res)
  }

  useEffect(() => {
    getPosts()
      .then(res => {
        if (res.posts) setPosts(res.posts)
        else setPosts([])
      })
      .catch(err => console.log(err))
  }, [onLike])

  return (
    <Box
      sx={{ width: '100%', height: '100%', padding: '20px' }}
    >
      <Typography variant='h1'>Posts</Typography>
      <Link to='/new-post' style={{ textDecoration: 'none' }}>
        <Button
          color='success'
          variant='contained'
          size='large'
        >
          Publicar post
        </Button>
      </Link>
      <Grid 
        container 
        spacing={2} 
        width='100%'
        marginTop='10px'
      >
        {
          posts.length > 0 && posts.map(post => (
            <Grid key={post.id} item width='100%' xs={12} sm={6}>
              <CardPost post={post} onLike={onLike} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}

export default Home
