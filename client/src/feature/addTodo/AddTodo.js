import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTodos = createAsyncThunk(
  'todo/fetchAllTodos',
  async () => {
    // const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Simulate a delay
    // await delay(2000); // 2000 milliseconds = 2 seconds delay
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const apiTodo = res.data.map(user => {
      delete user.userId
      delete user.completed
      return { ...user }
    })
    const getTodo = localStorage.getItem('todo');
    if (!getTodo) {
      const toString = JSON.stringify(apiTodo);
      localStorage.setItem('todo', toString);
    } else if (getTodo.length > 0) {
      const getTodo = localStorage.getItem('todo');
      const toObject = JSON.stringify(getTodo);
    }

    console.log(getTodo);
    return apiTodo
  }
)

const initialState = {
  data: [],
  loading: false,
  error: null
}

export const addTodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.data = action.payload;
        return;
      }

      const newData = {
        id: action.payload.id,
        title: action.payload.title
      }

      state.data.push(newData);
      localStorage.setItem('todo', JSON.stringify(state.data));
    },

    removeTodo: (state, action) => {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todo', JSON.stringify(state.data));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})

export const { addTodo, removeTodo } = addTodoSlice.actions;

export default addTodoSlice.reducer;
