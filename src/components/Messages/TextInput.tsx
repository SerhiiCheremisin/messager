import { useState } from 'react'
import { Typography, TextField, Box, Button  } from '@mui/material';
import { MessageInput } from '../../styles/sharedMuiStyles';
import { InputForm } from '../../styles/sharedMuiStyles';

const TextInput = () : JSX.Element => {

  const [message, setMessage] = useState("");

  return (
    <MessageInput>
     <InputForm component="form">
     <TextField
     sx={{ width: "90%"}}
     id="standard-basic"
     variant="standard" 
     value={message}
     onChange={(e) => setMessage(e.target.value)}
     multiline
     />   
       <Button sx={{width: "70px", height: "50px"}} onClick={() => setMessage('')} variant="contained">SEND</Button> 
     </InputForm>   
    </MessageInput>
   
  )
}

export default TextInput;
