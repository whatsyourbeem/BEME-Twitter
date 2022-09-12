import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './reducer/AuthReducer'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
})