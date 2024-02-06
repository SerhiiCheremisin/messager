import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const UseGetUserIntel = () => {

   const activeUser = useSelector( (state:RootState) => state.userReducer.activeUser);
   const talkTo = useSelector ( (state:RootState) => state.userReducer.talkingTo); 

  return {
    activeUser: activeUser,
    talkTo: talkTo
  }
}

export default UseGetUserIntel;
