import React from 'react'
import UseSetUserIntel from '../../services/hooks/UseSetUserIntel';
import UseGetUserIntel from '../../services/hooks/UseGetUserIntel';
import { Avatar, Typography, Button  } from '@mui/material';
import { colors } from '../../styles/colors';

interface IUserSingleButtonProps {
  name : string
  photoURL? : string
}

const UserSingleButton = ( {name, photoURL } :  IUserSingleButtonProps ):JSX.Element => {
 
const { setOpponent } = UseSetUserIntel();
const { activeUser , talkTo } = UseGetUserIntel();

const BGColorCustom = name.toUpperCase() === talkTo.toUpperCase() ? `${colors.colorActive}` : `${colors.colorThird}`;
  
  return (
    <Button onClick={() =>setOpponent(name)} variant="contained" sx={{ minWidth: "60%", justifyContent: "flex-start", display: 'flex', gap: "15px", backgroundColor: BGColorCustom}}>
      <Avatar alt={`photo of the user with nickname ${name}`} src={photoURL || ''} />
      <Typography>{`${name.toUpperCase()}`}</Typography>
    </Button>
  )
}

export default UserSingleButton;
