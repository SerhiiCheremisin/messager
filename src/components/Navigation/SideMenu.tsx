import React, { useEffect, useState } from 'react';
import { mockedUsers } from '../../services/mockedUsers';
import UserSingleButton from './UserSingleButton';
import { colors } from '../../styles/colors';
import UseGetUserIntel from '../../services/hooks/UseGetUserIntel';
import { getOpponents } from '../../services/api/apiServices';
import { messagesArrayType, userType } from '../../types/sharedTypes';
//Mui
import { Box, Typography } from '@mui/material';

const SideMenu = ():JSX.Element =>  {

 const { activeUser } = UseGetUserIntel();
 const [usersToDisplay, setUsersToDisplay] = useState<any[]>([])

useEffect( () => {
  getOpponents(activeUser)
  .then( (data) => {
   const unuqueUsers = new Set();
   data.data.map( (user:messagesArrayType) => unuqueUsers.add(user.from));
   setUsersToDisplay( Array.from(unuqueUsers));
  })
},[activeUser])

  return (
    <Box sx={{display: "flex", flexDirection: "column", padding: "10px 0", gap: "20px", width: "100%", height: "100%", background: `${colors.secondayColor}`, alignItems: "center"}}>
      { usersToDisplay.map( (el:string, id:number) => {
        return <UserSingleButton key={id} name={el}/>
      }) }
    </Box>
  )
}

export default SideMenu;
