import { createSlice } from '@reduxjs/toolkit'
// /createAsyncThunk
let userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      name: '张三丰'
    }
  },
  reducers: {
    SetUserInfo(state, actions) {
      state.userInfo = actions.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase('', (state, actions) => { })
  }
})
//外部组件使用
export const { SetUserInfo } = userSlice.actions
//store 注册使用
export default userSlice.reducer
