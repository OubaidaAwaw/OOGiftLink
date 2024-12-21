import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import RefreshNow from "../../Facilities/RefreshNow";

// Define the initial state using that type
const initialState = {
  res:{
    data: []
  }
}

export const CreateNewComment = createAsyncThunk("CommentsSlice/CreateNewComment", async (data, {dispatch}) => {
  try{
    const newComment = JSON.stringify(data)
    const accessToken = sessionStorage.getItem("accessToken")
    const response = await axios.post(`http://localhost:5000/comments`, newComment, {
      headers:{
        "Content-Type": "application/json",
        "authorization": `Bearer ${accessToken}`,
      },
    })
    .catch(err => console.error(err))
    RefreshNow(response ,dispatch)
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

export const GetCommentsByGid = createAsyncThunk("CommentsSlice/GetCommentsByGid", async (id, {dispatch}) => {
  try{
    const accessToken = sessionStorage.getItem("accessToken")
    const response = await axios.get(`http://localhost:5000/comments/${id}`, {
      headers:{
        "Content-Type": "application/json",
        "authorization": `Bearer ${accessToken}`,
      },
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


// Implement the slice
export const CommentsSlice = createSlice({
  name: "CommentsSlice",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
    .addCase(GetCommentsByGid.fulfilled, (state, action ) => {
      if(!action.payload.error)
        state.res = action.payload
    })
  }
})

export const res = state => state.Comments.res
export default CommentsSlice.reducer;
