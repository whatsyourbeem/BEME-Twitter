import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  profile: {
    username: '',
    nickname: '',
    profileImage: '',
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
})

export const { authenticate, setProfile } = authSlice.actions

export default authSlice.reducer