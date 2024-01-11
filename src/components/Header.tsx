import React from 'react';
//Mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Header = ():JSX.Element => {
  return (
    <Box sx ={{flexGrow: 1}}>
     <AppBar sx={{ flexDirection: "row", justifyContent: 'space-evenly', alignItems: "center", height: '100%'}} position='static'>
      <Typography> {`Welcome`} </Typography> 
      <Avatar alt="Users Avatar" src="/static/images/avatar/1.jpg"/>
     </AppBar> 
    </Box>
  )
}

export default Header;