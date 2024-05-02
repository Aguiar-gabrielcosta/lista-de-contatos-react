import { configureStore } from '@reduxjs/toolkit'

export type RootReducer = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: {}
})

export default store
