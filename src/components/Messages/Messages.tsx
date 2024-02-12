import React, { useEffect, useState } from 'react';
import SingleMessage from './SingleMessage';
import { getMessagesStory } from '../../services/api/apiServices';
import TextInput from './TextInput';
import { MessageWrapper , MessageHeaderColumn , SingleMessageText  } from '../../styles/sharedMuiStyles';
//Mui
import { Typography } from '@mui/material';
import { messagesArrayType } from '../../types/sharedTypes';

import UseGetUserIntel from '../../services/hooks/UseGetUserIntel';

const Messages = ():JSX.Element => {

  const { activeUser, talkTo } = UseGetUserIntel();
  const [ activeMessages, setActiveMessage ] = useState<any[]>([]);
  
  useEffect( () => {
    getMessagesStory(`${activeUser}`)
    .then( (data) => {
      const recievedMessage = [...data.data[0]].filter( (message:messagesArrayType) => message.from === `${talkTo}`)
      const sentMessages = [...data.data[1]].filter( (message:messagesArrayType) => message.to === `${talkTo}`)
      const sorted = [...recievedMessage,...sentMessages].sort( (a:any, b:any)  => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return +dateA - +dateB;
       });
       setActiveMessage(sorted);
    })

  },[talkTo])

  if (talkTo == "") {
    return (
      <MessageWrapper>
        <Typography variant='h5'> Pick someone to see the messages </Typography>
      </MessageWrapper>
    )
  }

  return (
    <MessageWrapper>
     <MessageHeaderColumn>
      <SingleMessageText> { `${talkTo.toUpperCase()}` } </SingleMessageText> 
     </MessageHeaderColumn>
      {activeMessages.map( (el:messagesArrayType, id: number ) => <SingleMessage key={id} date={el.date} position={activeUser === el.from ? "user" : "opponent"} message={el.message}/> )}
     <TextInput/>
    </MessageWrapper>
  )
}

export default Messages;