import { useState } from 'react';
import UseGetUserIntel from '../services/hooks/UseGetUserIntel';
import UseSetUserIntel from '../services/hooks/UseSetUserIntel';
import UserInformationModal from './Modals/UserInformationModal';
//Mui
import { AppBar, Box, Typography, Avatar, Menu, MenuItem, IconButton } from '@mui/material';

import { colors } from '../styles/colors';

const Header = ():JSX.Element => {
  const { activeUser } = UseGetUserIntel();
  const { setUser, setOpponent } = UseSetUserIntel();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>):void => {
    setAnchorElUser(event.currentTarget);
  };

  const logoutHandler = ():void => {
    setUser("");
    setOpponent("");
    setAnchorElUser(null);
  }

  const showUserInformation = ():void => {
    setShowUserInfo(true);
    setAnchorElUser(null);
  } 

  const handleCloseUserMenu = ():void => {
    setAnchorElUser(null);
  };

  return (
    <Box sx ={{flexGrow: 1}}>
     <AppBar sx={{ backgroundColor: `${colors.mainColor}`, flexDirection: "row", justifyContent: 'space-evenly', alignItems: "center", height: '100%'}} position='static'>
      <Typography> {`Welcome, ${activeUser}`} </Typography> 
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
      <Avatar alt="Users Avatar" src="/static/images/avatar/1.jpg"/>
      </IconButton>
      <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
               <MenuItem onClick={showUserInformation}>
                  <Typography textAlign="center">User information</Typography>
                </MenuItem>
                <MenuItem onClick={logoutHandler}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
            { showUserInfo && <UserInformationModal closeModal={setShowUserInfo}/> }
     </AppBar> 
    </Box>
  )
}

export default Header;