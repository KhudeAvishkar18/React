import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})

// This is the store where all the states will be stored
// Reducer will help us to update the value of state variable by taking initial value of that state