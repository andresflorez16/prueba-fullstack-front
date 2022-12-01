import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
  Box,
  TextField,
  Typography,
  Button
} from '@mui/material'
import { useSnackbar } from 'notistack'
import { newUser } from '../api'

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar()

  const onSubmit = async (data) => {
    const res = await newUser(data)
    if (res.code) {
      enqueueSnackbar('Usuario añadido', {
        variant: 'success',
        autoHideDuration: 1500,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      })
      localStorage.setItem('user', JSON.stringify(res.user))
      navigate('/')
    }
  }

  return (
    <Box
      sx={{ width: '100%', height: 'calc(100vh - 100px)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
    >
      <Typography variant='h3'>Registrarse</Typography>
      <form
        className='form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label='Nombre'
          {...register('name', { required: true })}
        />
        {errors.name && <Typography color='error' sx={{ display: 'flex', alignItems: 'center', padding: '0px', margin: '0px' }}>El nombre es obligatorio</Typography>}
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
          Registrar
        </Button>
      </form>
      <Typography
        sx={{ display: 'block' }}
      >
        Si ya tienes una cuenta <Link to='/login'>Entra aquí</Link>
      </Typography>
    </Box>
  )
}

export default Signup
