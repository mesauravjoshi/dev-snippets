import { configureStore } from '@reduxjs/toolkit'
import addTodoReducer from '../feature/addTodo/AddTodo';

export const store = configureStore({
  reducer: {
    todo: addTodoReducer
  }
})