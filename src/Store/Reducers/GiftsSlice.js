import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import RefreshNow from "../../Facilities/RefreshNow";


// Define the initial state using that type
const initialState = {
  res:{
    data: []
  },
  CurrentGift: {}
}

export const GetGifts = createAsyncThunk("GiftsSlice/GetGifts", async (_, {dispatch}) => {
  try{
    const accessToken = sessionStorage.getItem("accessToken")
    const response = await axios.get(`http://localhost:5000/gifts`, {
      headers:{
        "Content-Type": "application/json",
        "authorization": `Bearer ${accessToken}`,
      },
    })
    .catch(err => console.error(err))
    RefreshNow(response, dispatch)
    return response.data || {
      error: true,
      message: "the response is empty!!",
      data: []
    }
  } catch(err) {
    console.error(err)
    return {
      error: true,
      message: "there is something went wrong when fetching",
    }
  }
})

export const GetGiftsById = createAsyncThunk("GiftsSlice/GetGiftsById", async (id, {dispatch}) => {
  try{
    const accessToken = sessionStorage.getItem("accessToken")
    const response = await axios.get(`http://localhost:5000/gifts/${id}`, {
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
  } catch(err) {
    console.error(err)
    return {
      error: true,
      message: "there is something went wrong when fetching",
    }
  }
})

export const CreateNewGift = createAsyncThunk('GiftsSlice/CreateNewGift', async (data, {dispatch}) =>{
  try{
    const newGift = new FormData()
    newGift.append("photo", data.image)
    newGift.append("status", data.status)
    newGift.append("catigury", data.catigury)
    newGift.append("title", data.title)
    const accessToken = sessionStorage.getItem("accessToken")
    const response = await axios.post(`http://localhost:5000/gifts`, newGift, {
      headers:{
        "Content-Type": "multipart/form-data",
        "authorization": `Bearer ${accessToken}`
      }
    })
    .catch(err => console.error(err))
    RefreshNow(response,dispatch)
    return response.data || {
      error: true,
      message: "the response is empty!!",
      data: []
    }
  } catch(err) {
    console.error(err)
    return {
      error: true,
      message: "there is something went wrong when fetching",
      data: []
    }
  }
})

function FulFilled(state, action){
  state.res = action.payload
  return state
}

// Implement the slice
export const GiftsSlice = createSlice({
  name: "GiftsSlice",
  initialState,
  reducers: {
    GetGiftById(state, action){
      const gift = state.res.data.find(el => action.payload === el._id)
      if(gift?.length !== 0)
        state.CurrentGift = gift
    }
  },
  extraReducers(builder){
    builder
    .addCase(GetGifts.fulfilled, FulFilled)
    .addCase(GetGifts.rejected, FulFilled)
    .addCase(GetGiftsById.fulfilled,(state, action)=>{
      if(!action.payload.error)
        state.CurrentGift = action.payload.data
    })
    .addCase(CreateNewGift.fulfilled, (state, action) => {
      if(!action.payload.error){
        const newState = JSON.parse(JSON.stringify(state))
        newState.res.data?.push(action.payload.data[0])
        return newState
      }
    })
  }
})
export const {GetGiftById} = GiftsSlice.actions
export const res = state => state.Gifts.res
export const CurrentGift = state => state.Gifts.CurrentGift
export default GiftsSlice.reducer
