import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
  Box,
  TextField,
  Typography,
  Button
} from '@mui/material'
import { addNewPost } from '../api'

const NewPost = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const getBase64 = file => {
    return new Promise(resolve => {
      let baseURL = "";
      let reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const onSubmit = async (data) => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(data.image[0].size < 50000) {
      getBase64(data.image[0])
      .then(async (result) => {
          const res = await addNewPost({ ...data, image: result, user: user.email })
          if (res.post) {
            navigate('/')
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      const res = await addNewPost({ ...data, image: '', user: user.email })
      console.log(res)
      if (res.post) {
        navigate('/')
      }
    }
  }

  return (
    <Box
      sx={{ width: '100%', height: 'calc(100vh - 100px)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
    >
      <Typography variant='h3'>Nuevo Post</Typography>
      <form
        className='form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label='Titulo'
          {...register('title', { required: true })}
        />
        {errors.title && <Typography color='error' sx={{ display: 'flex', alignItems: 'center', padding: '0px', margin: '0px' }}>El email es obligatorio</Typography>}
        <TextField
          label='Descripción'
          {...register('description', { required: true })}
        />
        {errors.description && <Typography color='error' sx={{ display: 'flex', alignItems: 'center', padding: '0px', margin: '0px' }}>La contraseña es obligatorio</Typography>}
        <Box>
          <Typography>Image menor a 50kb</Typography>
           <TextField
            type='file'
            {...register('image', { required: true })}
          />
        </Box>
        <Button
          color='success'
          type='submit'
          variant='contained'
          size='large'
        >
          Postear!
        </Button>
      </form>
    </Box>
  )
}

export default NewPost
