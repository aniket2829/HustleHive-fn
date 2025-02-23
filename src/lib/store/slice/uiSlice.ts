import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: number,
  isSidebarOpen: boolean
}

const initialState: CounterState = {
  value: 0,
  isSidebarOpen: true
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
        state.isSidebarOpen = !state.isSidebarOpen
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleSidebar } = counterSlice.actions

export default counterSlice.reducer