import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user'
const state = configureStore({
  reducer: {
    user: userReducer
  }
})
export default state
