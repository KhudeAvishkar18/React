import { createSlice } from '@reduxjs/toolkit'

// Initial value of state
const initialState = {
  value: 0,
}

// counterSlice is the state for counter state
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    // Above line allows us to change the value of state without using state updation function
    // It actually creates an updated copy of that state and replace it with original
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    // reducer is an object containing all the actions which will update value of state variable.
    // Here increment, decrement are the 'actions' that will tell reducer to manipulate the redux store data i.e. state variables stored in redux store
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;