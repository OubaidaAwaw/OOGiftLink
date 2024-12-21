import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import RefreshNow from "../../Facilities/RefreshNow"

  // Define the initial state using that type
const initialState = {
  res: {
    data:[]
  }
}

export const SearchGift = createAsyncThunk('SearchSlice/SearchGift', async (data, {dispatch}) =>{
  try{
    const SearchData = JSON.parse(JSON.stringify(data))
    const accessToken = sessionStorage.getItem("accessToken")
    const response = await axios.post(`http://localhost:5000/search`, SearchData, {
      headers:{
        "Content-Type": "application/json",
        "authorization": `Bearer ${accessToken}`
      }
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
      data: []
    }
  }
})

  // Implement the slice
export const SearchSlice = createSlice({
  name: "SearchSlice",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
    .addCase(SearchGift.fulfilled, (state, action)=>{
      state.res = action.payload
      return state
    })
  }
})

export const res = state => state.Search.res
export default SearchSlice.reducer