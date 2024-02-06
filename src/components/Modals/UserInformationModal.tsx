import React from 'react';
import { ModalStyled } from '../../styles/sharedMuiStyles';
import { Modal, Button , Typography, Box, Backdrop, Fade } from '@mui/material';

interface IUserInformationModalProps {
    closeModal : React.Dispatch<React.SetStateAction<boolean>>
}

const UserInformationModal = ( { closeModal } : IUserInformationModalProps ):JSX.Element => {

    const closeModalHandler = ():void => {
        closeModal(false);
    } 

  return (
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Button onClick={closeModalHandler} variant="outlined">Close</Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  )
}


export default UserInformationModal;