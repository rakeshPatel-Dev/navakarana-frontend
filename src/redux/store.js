import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import musicReducer from './features/musicSlice'
import videoReducer from './features/videos/videoSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    music: musicReducer,
    videos: videoReducer,
  }
})

export default store