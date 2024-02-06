import React, { useEffect, useState } from 'react';
import SingleMessage from './SingleMessage';
import TextInput from './TextInput';
import { MessageWrapper , MessageHeaderColumn , SingleMessageText  } from '../../styles/sharedMuiStyles';
//Mui
import { Typography } from '@mui/material';
import { messagesArrayType } from '../../types/sharedTypes';

import { mockedMessages } from '../../services/mockedUsers';
import UseGetUserIntel from '../../services/hooks/UseGetUserIntel';

const Messages = ():JSX.Element => {

  const { activeUser, talkTo } = UseGetUserIntel();
  const [ activeMessages, setActiveMessage ] = useState<any[]>([]);
  
  useEffect( () => {
   const active:messagesArrayType[] = mockedMessages.filter( (el:messagesArrayType) => el.from === talkTo && el.to === activeUser );
   const passive:messagesArrayType[] = mockedMessages.filter( (el:messagesArrayType) => el.from === activeUser && el.to === talkTo );
   const sorted = [...active,...passive].sort( (a:any, b:any)  => {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);
    return +dateA - +dateB;
   });
   setActiveMessage(sorted);
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