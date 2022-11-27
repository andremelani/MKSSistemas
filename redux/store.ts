import { configureStore, StateFromReducersMapObject } from '@reduxjs/toolkit'
import { cartReducer } from './cartSlice'

const reducer = {
  cart: cartReducer,
}

const store = configureStore({
  reducer,
})

export type RootState = StateFromReducersMapObject<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store