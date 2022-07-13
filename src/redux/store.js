import { configureStore } from '@reduxjs/toolkit'
import headAppSlice from './slices/headAppSlice'

export default configureStore({
  reducer: {
    app: headAppSlice
  }
})