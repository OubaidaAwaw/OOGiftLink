import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// Define the initial state using that type
const initialState = {
  res: {}
}

export const RefreshToken = createAsyncThunk("AuthSlice/RefreshToken", async () => {
  try{
    const response = await axios.get(`http://localhost:5000/refresh`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if(!response?.data.error) {
      sessionStorage.clear()
      sessionStorage.setItem("accessToken", response.data.accessToken)
    }
    else console.warn("no response")
  } catch(err) {
    console.warn(err)
  }
})

export const Login = createAsyncThunk("AuthSlice/Login", async (data) => {
  try{
    const response = await axios.post(`http://localhost:5000/login`,JSON.stringify(data), {
      withCredentials: true,
      headers :{
        'Content-Type': 'application/json',
      },
    })
    .catch(err => console.error(err))
    return response.data || {
      error: true,
      message: "the response is empty!!",
    }
  } catch(err) {
    console.error(err)
    return {
      error: true,
      message: "there is something went wrong when fetching",
    }
  }
})

export const Register = createAsyncThunk("AuthSlice/Register", async (data) => {
  try{
    const NewUser = JSON.stringify(data)
    const response = await axios.post(`http://localhost:5000/register`, NewUser, {
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(res => res.data)
    .catch(err => console.error(err))
    return response || {
      error: true,
      message: "the response is empty!!",
    }
  } catch(err) {
    console.error(err)
    return {
      error: true,
      message: "there is something went wrong when fetching",
    }
  }
})


export const Logout =createAsyncThunk("AuthSlice/Logout", async () => {  
  try{
    sessionStorage.removeItem('accessToken')
    const response = await axios.post(`http://localhost:5000/logout`, {}, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .catch(err => console.error(err))
    return response.data || {
      error: true,
      message: "the response is empty!!",
    }
  } catch(err) {
    console.error(err)
  }
})


function FulFilled(state, action){
  state.res = action.payload
  return state
}

// Implement the slice
export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
    .addCase(Register.fulfilled, FulFilled)
    .addCase(Register.rejected, FulFilled)

    .addCase(Login.rejected, FulFilled)
    .addCase(Login.fulfilled, (state, action) => {
      if(!action.payload.error){
        sessionStorage.setItem("accessToken", action.payload.accessToken)
      }
    })
  
    .addCase(Logout.fulfilled, FulFilled)
  }
})

export const res = state => state.Auth.res
export default AuthSlice.reducer