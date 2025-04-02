import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
  }; 

  const authSlice = createSlice({ ///3 part hote hai name,initialState,reducers
    name: "authSlice",
    initialState,
    reducers: {  //mutipal action hote hai
  userLoggedIn: (state, action) => {
         
      },
      userLoggedOut:(state) => {
         
      }
    },
  });

  export const {userLoggedIn, userLoggedOut} = authSlice.actions;
export default authSlice.reducer;