import { createSlice } from '@reduxjs/toolkit'
import { RootStateOrAny } from 'react-redux'
import { Reducer } from 'redux'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find(
        (item: RootStateOrAny) => item.id === action.payload.id
      )
      if (itemExists) {
        itemExists.quantity++
      } else {
        state.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state: RootStateOrAny, action) => {
      const item = state.find(
        (item: RootStateOrAny) => item.id === action.payload
      )
      item.quantity++
    },

    decrementQuantity: (state, action) => {
      const item: RootStateOrAny = state.find(
        (item: RootStateOrAny) => item.id === action.payload
      )
      if (item.quantity === 1) {
        const index = state.findIndex(
          (item: RootStateOrAny) => item.id === action.payload
        )
        state.splice(index, 1)
      } else {
        item.quantity--
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(
        (item: RootStateOrAny) => item.id === action.payload
      )
      state.splice(index, 1)
    },
  },
})

export const cartReducer: Reducer = cartSlice.reducer

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions


/*

import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action):any => {
            state.products.push<any>(action.payload)
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
            
        },

        removeProduct: (state, action):any => {
            state.filter( (i: { id: any; }) => i.id !== action.payload);
            
        },
        
        reset: (state) => {
            state.products = []
            state.quantity = 0;
            state.total = 0;
        }
    }
})

export const {addProduct,reset, removeProduct} = cartSlice.actions;
export default cartSlice.reducer*/