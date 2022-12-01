import { 
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  Box,
  Button
} from '@mui/material'

export const CardPost = ({ post, onLike }) => { 

  return (
    <Card 
      variant='solid'
      sx={{ 
      margin: '0 auto',
      width: '90%', 
      minHeight: '100%',
      backgroundColor: '#333', 
      color: 'white'
      }}
    >
      <CardHeader title={<Typography textTransform='capitalize' textAlign='center'>{post.title}</Typography>}/>
      <CardContent sx={{ backgroundColor: '#888' }}>
        {
          post.image.length > 0 &&
        <Box
          sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
        <img src={post.image} alt={post.id} width='100px'/>
        </Box>
        }
        <Typography variant='body2'>{post.description}</Typography>
        <Divider sx={{ marginY: 1, backgroundColor: '#fff' }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography>Likes: {post.likes.length}</Typography>
          <Button size='large' onClick={() => onLike(post.id, post.user)}>
            <Typography
              variant='h4'
            >
              💖
            </Typography>
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}
