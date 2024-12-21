  // import hooks from RTK
import {configureStore} from "@reduxjs/toolkit"

  // import slices
import GiftsSlice from "./Reducers/GiftsSlice"
import AuthSlice from "./Reducers/AuthSlice"
import CommentsSlice from "./Reducers/CommentSlice"
import AccountSlice  from "./Reducers/AccountSlice"
import SearchSlice from "./Reducers/SearchSlice"

export const store = configureStore({
  reducer:{
    Gifts: GiftsSlice,
    Auth: AuthSlice,
    Comments: CommentsSlice,
    Account: AccountSlice,
    Search: SearchSlice
  }
})
