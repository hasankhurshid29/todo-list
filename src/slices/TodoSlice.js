import { createSlice } from '@reduxjs/toolkit';

export const TodoSlice = createSlice({
  name: "TodoSlice",
  initialState: { toDoList: [], index: 0 },
  reducers: {
    add: (state, action) => {
      const arr = state.toDoList;
      const findValue = arr.find(item => item.value === action.payload)
      if(!findValue) {
        arr.push({ id: state.index + 1, value: action.payload })
        state.toDoList = arr;
        state.index += 1
      }
    },
    deleteItem: (state, action) => {
      state.toDoList = state.toDoList.filter(item => item.id !== action.payload)
    }
  }
})

export const { add, deleteItem } = TodoSlice.actions

export default TodoSlice.reducer