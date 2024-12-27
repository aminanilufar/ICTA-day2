import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
      <div>
          <AppBar color='success'>
              <Toolbar >
                  <Typography variant="h6">Home</Typography>&nbsp;
                  <Link to='/l'>
                      <button variant="contained">Login</button>&nbsp;
                  </Link>
                  <Link to='/s'>
                      <button variant="contained">Signup</button>&nbsp;
                  </Link>
                  <Link to='/t'>
                      <button variant="contained">List</button>
                  </Link>
              </Toolbar>
          </AppBar>
    </div>
  )
}
