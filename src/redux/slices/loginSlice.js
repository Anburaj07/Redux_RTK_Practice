import { createSlice } from "@reduxjs/toolkit";

const loginSlice=createSlice({
    name:"login",
    initialState:{
        user:{},
        status:false
    },
    reducers:{
        loginUser:(state,{type,payload})=>{
            state.user=payload;
            state.status=true;
        }
    }
})

export const {loginUser}=loginSlice.actions;
export default loginSlice.reducer