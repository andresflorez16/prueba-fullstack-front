import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
  Box,
  TextField,
  Typography,
  Button
} from '@mui/material'

const Login = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <Box
      sx={{ width: '100%', height: 'calc(100vh - 100px)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
    >
      <Typography variant='h3'>Iniciar sesión</Typography>
      <form
        className='form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label='Email'
          {...register('email', { required: true })}
        />
        {errors.email && <Typography color='error' sx={{ display: 'flex', alignItems: 'center', padding: '0px', margin: '0px' }}>El email es obligatorio</Typography>}
        <TextField
          label='Contraseña'
          type='password'
          {...register('password', { required: true })}
        />
        {errors.password && <Typography color='error' sx={{ display: 'flex', alignItems: 'center', padding: '0px', margin: '0px' }}>La contraseña es obligatorio</Typography>}
        <Button
          color='success'
          type='submit'
          variant='contained'
          size='large'
        >
          Entrar
        </Button>
      </form>
      <Typography
        sx={{ display: 'block' }}
      >
        Si no tienes una cuenta aún <Link to='/signup'>Regístrate aquí</Link>
      </Typography>
    </Box>
  )
}

export default Login
