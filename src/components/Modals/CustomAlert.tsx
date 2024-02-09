import React, { useEffect } from 'react';
import { Slide,Stack, Alert, Box } from '@mui/material';
import { ICUstomAlertProps } from '../../types/sharedTypes';


const CustomAlert = ( { type , text, cleanUp } : ICUstomAlertProps ):JSX.Element => {

    useEffect( () => {
      setTimeout( () => {
        cleanUp()
      }, 2000)  
    })

  return (
    <Box onClick={() => cleanUp()} sx={{position: "absolute", right: "5px"}}>
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
    <Stack sx={{ width: '100%' }} spacing={2}>
    <Alert variant="filled" severity={`${type}`}>
      { `${text}` }
    </Alert>
    </Stack>
    </Slide>
    </Box>
  )
}

export default CustomAlert;
