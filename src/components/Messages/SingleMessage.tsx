import React from 'react';
import { ISingleMessageProps } from '../../types/sharedTypes';
import { MessageBase, SingleMessageText, SingleDateText } from '../../styles/sharedMuiStyles';


const SingleMessage = ( { message, position, date } : ISingleMessageProps ):JSX.Element => {


 if ( position === "user" ) {
     return(
         <MessageBase sx={{ borderBottomRightRadius: "0", marginLeft: "58%" }}>
          <SingleMessageText> { message } </SingleMessageText>
          <SingleDateText> { date.toLocaleString() } </SingleDateText>
         </MessageBase>
     )
 }
    return(
     <MessageBase sx={{ borderBottomLeftRadius: "0" }}>
      <SingleMessageText> { message } </SingleMessageText>
      <SingleDateText> { date.toLocaleString() } </SingleDateText>
     </MessageBase>
    )
}

export default SingleMessage;