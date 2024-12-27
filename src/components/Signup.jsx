import { Avatar, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
          <br /><br />
          <Typography variant="h1" gutterBottom>Signup Page</Typography>
          <center><Avatar src="/static/images/avatar/avatar.jpeg" sx={{ width: 56, height: 56 }} ></Avatar></center>
          <br />
          <TextField label="username" variant="outlined" /><br /><br />
          <TextField label="password" variant="outlined" /><br /><br />
          <Button variant="contained" color='success'>submit</Button>
    </div>
  )
}

export default Signup
