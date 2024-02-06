import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { setActiveUser, setActiveOpponent } from '../../redux/reducers/userReducer';

const UseSetUserIntel = () => {
 
  const dispatch : AppDispatch = useDispatch();

  const setUser = (name:String) => {
    dispatch(setActiveUser(name));
  }
  const setOpponent = ( name: String) => {
    dispatch(setActiveOpponent(name));
  }

    return {
        setUser : setUser,
        setOpponent: setOpponent
  }
}


export default UseSetUserIntel;