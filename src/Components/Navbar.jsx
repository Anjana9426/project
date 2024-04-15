import { Button, Link, TextField, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
     <Typography variant='h5'  gutterBottom>FEEDBACK</Typography>
     <TextField id="outlined-basic" label="NAME"variant='outlined' color='success'></TextField><br /><br />
     <TextField id="outlined-basic" label="EMAIL"variant='outlined' color='warning'></TextField><br /><br />
     <TextField id="outlined-basic" label="FOOD"variant='outlined' color='error'></TextField><br /><br />
     <TextField id="outlined-multiline-static"label="DESCRIPTION"multiline rows={4}defaultValue=""/> <br /><br />
     <Button variant='contained'><Link to='SUBMIT' style={{textDecoration:'none',color:'black'}}>SUBMIT</Link></Button>
    
         </div>
  )
}

export default Navbar