import React from 'react';
import { mockedUsers } from '../../services/mockedUsers';
import UserSingleButton from './UserSingleButton';
import { colors } from '../../styles/colors';
//Mui
import { Box, Typography } from '@mui/material';

const SideMenu = ():JSX.Element =>  {
  return (
    <Box sx={{display: "flex", flexDirection: "column", padding: "10px 0", gap: "20px", width: "100%", height: "100%", background: `${colors.secondayColor}`, alignItems: "center"}}>
      { mockedUsers.map( (el:string, id:number) => {
        return <UserSingleButton key={id} name={el}/>
      }) }
    </Box>
  )
}

export default SideMenu;
