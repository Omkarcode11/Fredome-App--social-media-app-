import React, { useEffect } from 'react'
import {AppBar,Typography,Grow,Grid, Container} from '@mui/material'
import { useDispatch } from 'react-redux'


import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import './App.css'
import { fetchAllPosts } from './redux/slice/posts.slice'


function App() {
 const dispatch = useDispatch();
 useEffect(()=>{
   dispatch(fetchAllPosts())
 },[dispatch])
  return (
    <Container maxWidth='lg'>
      <AppBar position='static' className="appBar" color='inherit'>
        <Typography className='heading' variant='h2' align='center'>Memories</Typography>
        <img className='image' src="https://picsum.photos/200/300" alt="memories" height='60'/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
              <Posts/>
              </Grid>
              <Grid item xs={12} sm={4}>
              <Form/>
              </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App