import React from 'react';
import { mockedUsers } from '../../services/mockedUsers';
//Mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { idText } from 'typescript';

const SideMenu = ():JSX.Element =>  {
  return (
    <Box sx={{display: "flex", flexDirection: "column", padding: "10px 0", gap: "20px", width: "100%", height: "100%", background: "grey", alignItems: "center"}}>
      { mockedUsers.map( (el:string, id:number) => {
        return <Typography key={id}>{`${el}` }</Typography>
      }) }
    </Box>
  )
}

export default SideMenu;
