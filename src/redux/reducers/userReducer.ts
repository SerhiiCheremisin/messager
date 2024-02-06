import { createSlice } from '@reduxjs/toolkit';
import { IUserSlice } from '../../types/sharedTypes';


const ititialState : IUserSlice = {
    activeUser: "",
    talkingTo: ""
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState : ititialState,
    reducers: {
      setActiveUser (state, action) {
        state.activeUser = action.payload;
      },
      setActiveOpponent (state, action) {
        state.talkingTo = action.payload
      }
    }
})

export const { setActiveUser, setActiveOpponent } = userSlice.actions;
export default userSlice.reducer;