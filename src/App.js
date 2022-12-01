import { useEffect, useState } from 'react'
import { Box, CssBaseline } from '@mui/material'
import './App.css' 
import { Routes, Route, useNavigate } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import NewPost from './components/NewPost'
import { logout, login, signup } from './api'


const App = () => {
  const navigate = useNavigate()

  const onSubmitLogin = async (data) => {
    const res = await login(data)
    console.log(res)
    if (res.user) {
      localStorage.setItem('user', JSON.stringify(res.user))
      navigate('/')
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user && user.length > 0 && user !== 'undefined') {
      navigate('/')
    }
    else {
      navigate('/login')
    } 
  }, [])

  return (
    <SnackbarProvider maxSnack={3}>
      <CssBaseline />
      <Box
        width='100vw'
        minHeight='100vh'
        sx={{ backgroundColor: '#F3EFE0' }}
      >
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/signup' exact element={<Signup />} />
          <Route path='/login' exact element={<Login onSubmit={onSubmitLogin} />} />
          <Route path='/new-post' exact element={<NewPost />} />
        </Routes>
      </Box>
    </SnackbarProvider>
  )
}

export default App;
