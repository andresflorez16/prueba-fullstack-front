import { Link } from 'react-router-dom'
import {
  Box,
  Typography,
} from '@mui/material'

const Navbar = () => {
  return (
    <Box
      sx={{ width: '100%', height: '100px', p: '20px', backgroundColor: '#D6E4E5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Typography variant='h2'>LikesApp</Typography>
      </Link>
    </Box>
  )
}

export default Navbar
