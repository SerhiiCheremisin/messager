import React, { useState } from 'react';
import { ModalStyled } from '../../styles/sharedMuiStyles';
import UseSetUserIntel from '../../services/hooks/UseSetUserIntel';
import { Modal, Button , Typography, Box, Backdrop, Fade, TextField, Alert , CircularProgress } from '@mui/material';
import { getAllUsersData } from '../../services/api/apiServices';
import { userType , kindType , userDataType, AlertHandlerType } from '../../types/sharedTypes';
import { setNewUserToDB } from '../../services/api/apiServices';
import CustomAlert from './CustomAlert';

const FirstScreenModal = ():JSX.Element => {

    const { setUser } = UseSetUserIntel();
    const [userData, setUserData] = useState<userType> ( {
      name: "",
      lastName: "",
      password: "",
      nickName: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [userKind, setUserKind] = useState<kindType>("oldUser");
    const [alertOptions, setAlertOptions] = useState<AlertHandlerType>({
      isShown : false,
      text: "",
      type: "error"
    })

    const cleanUpHandler = ():void =>  {
      setAlertOptions({...alertOptions, isShown: false })
    }

    const customBackgroundColorNew = userKind === "newUser" ? "red" : "";
    const customBackgroundColorOld = userKind === "newUser" ? "" : "red";
    const cusomButtonText = userKind === "oldUser" ? "Log in" : "Register";

    const userDataHandler = (key: userDataType , value: string):void => {
      const newState = {
        ...userData,
        [key] : value
      };
      setUserData(newState)
    }
 
    const closeModalHandler = (kind :kindType ):void => {
      setIsLoading(true);
      if ( kind === "oldUser" ) {
        if (userData.nickName === "" || userData.password === ""){
          setIsLoading(false);
          setAlertOptions( { ...alertOptions, isShown: true, text: "Please fill all fields" })
          return;
         }
        getAllUsersData()
        .then( data =>  {
         setIsLoading(false);
         const findedUser = [...data.data].filter( (user : userType) => user.nickName.toLowerCase() === userData.nickName.toLowerCase());
         if ( findedUser.length === 0) {
          setAlertOptions( { ...alertOptions, isShown: true, text: "Such user does not exist or you added wrong data" })
          return;
         }
         setUser(findedUser[0].nickName);
         return;
        })
      }
      else {
        if (userData.name === "" || userData.password === "" || userData.name === "" || userData.lastName === "") {
          setIsLoading(false);
          setAlertOptions( { ...alertOptions, isShown: true, text: "Please fill all fields" })
          return;
         }
         getAllUsersData()
          .then( data =>  {
           setIsLoading(false);
           const isUserExists = [...data.data].some( (user : userType) => user.nickName.toLowerCase() === userData.nickName.toLowerCase());
           if (!isUserExists) {
            setNewUserToDB(userData);
            setUser(userData.nickName);
            return;
           }
           if (isUserExists) {
            setAlertOptions( { ...alertOptions, isShown: true, text: "Such user already exists" })
            return;
           }
          })
      }
    } 

  if (isLoading) {
    return(
     <Box>
       <Modal
     aria-labelledby="transition-modal-title"
     aria-describedby="transition-modal-description"
     open={true}
     onClose={closeModalHandler}
     closeAfterTransition
     slots={{ backdrop: Backdrop }}
     slotProps={{
       backdrop: {
         timeout: 500,
       },
     }}
   >
     <Fade in={true}>
       <Box sx={ModalStyled}>
         <Box sx={{ display: 'flex' }}>
          <CircularProgress />
         </Box>
       </Box>
     </Fade>
   </Modal>
    </Box>
    )
  }    
  return (
    <Box sx={{position: 'relative'}}>
    <Modal
     aria-labelledby="transition-modal-title"
     aria-describedby="transition-modal-description"
     open={true}
     onClose={closeModalHandler}
     closeAfterTransition
     slots={{ backdrop: Backdrop }}
     slotProps={{
       backdrop: {
         timeout: 500,
       },
     }}
   >
     <Fade in={true}>
       <Box sx={ModalStyled}>
         <Typography id="transition-modal-title" variant="h6" component="h2">
          Who are you?
         </Typography>
         <Box sx={{display: "flex", gap: 5}}>
          <Button sx={{border: `1px solid ${customBackgroundColorOld}`}} onClick={() => setUserKind("oldUser")} variant="outlined">Old user</Button>
          <Button sx={{border: `1px solid ${customBackgroundColorNew}`}} onClick={() => setUserKind("newUser")} variant="outlined">New user</Button> 
          </Box>
          <Box sx={{display: "flex" , flexDirection: "column", gap: 2, margin: 2}}>
          <TextField onChange={(e) => userDataHandler("nickName" , e.target.value)} value={userData.nickName} id="filled-basic" label="Your NickName" variant="filled" /> 
          <TextField onChange={(e) => userDataHandler("password", e.target.value)} value={userData.password} id="filled-basic" label="Your Password" variant="filled" />
          {userKind === "newUser" && <TextField onChange={(e) => userDataHandler("name", e.target.value)} value={userData.name} id="filled-basic" label="Your First Name" variant="filled" />}
          {userKind === "newUser" && <TextField onChange={(e) => userDataHandler( "lastName", e.target.value)} value={userData.lastName} id="filled-basic" label="Your Last Name" variant="filled" />}
          </Box>
          <Button onClick={() => closeModalHandler(userKind)} variant="outlined">{`${cusomButtonText}`}</Button> 
          { alertOptions.isShown && <CustomAlert cleanUp={cleanUpHandler} text={`${alertOptions.text}`} type={`${alertOptions.type}`}/> }
       </Box>
     </Fade>
   </Modal>
 </Box>
  )
}

export default FirstScreenModal;