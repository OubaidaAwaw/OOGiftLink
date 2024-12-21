import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import RefreshNow from "../../Facilities/RefreshNow";


  // Define the initial state using that type
const initialState = {
  IsLoading: true,
  res: {
    data: []
  }
}

export const UpdateMyAccount = createAsyncThunk("AccountSlice/UpdateMyAccount", async (data, {dispatch}) => {
  try{
    console.log(data)
    const accessToken = sessionStorage.getItem("accessToken")
    const NewData = JSON.stringify(data)
    const response = await axios.put(`http://localhost:5000/account`, NewData, {
      headers:{
        "Content-Type": "application/json",
        "authorization": `Bearer ${accessToken}`,
      }
    })
    .catch(err => console.error(err))
    RefreshNow(response, dispatch)
    return response?.data || {
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

export const GetAccount = createAsyncThunk("AccountSlice/GetAccount",async (_, {dispatch}) => {
  try {
    const accessToken = sessionStorage.getItem("accessToken")
    const response = await axios.get(`http://localhost:5000/account`, {
      headers:{
        "Content-Type": "application/json",
        "authorization": `Bearer ${accessToken}`,
      },
    })
    .catch(err => console.error(err))
    RefreshNow(response, dispatch)
    return response?.data || {
      error: true,
      message: "the response is empty!!",
      data: []
    }
  } catch (err) {
    console.error(err)
  }
}) 

function FulFilled(state, action){
  state.res = action.payload
  return state
}

  // Implement the slice
export const AccountSlice = createSlice({
  name: "AccountSlice",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
    .addCase(GetAccount.fulfilled, FulFilled)
    .addCase(GetAccount.rejected, FulFilled)
    .addCase(UpdateMyAccount.rejected, FulFilled)
    .addCase(UpdateMyAccount.fulfilled, FulFilled)
  }
})

export const res = state => state.Account.res
export default AccountSlice.reducer
