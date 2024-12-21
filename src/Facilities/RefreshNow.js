import { RefreshToken } from "../Store/Reducers/AuthSlice"

export default function RefreshNow(response, dispatch) {
  if(response.data.error && response.data.message === "the user is not authorized!"){
    dispatch(RefreshToken())
  }
}
