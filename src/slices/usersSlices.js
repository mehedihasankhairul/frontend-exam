import { createSlice } from '@reduxjs/toolkit'

const initialState = { data: JSON.parse(localStorage.users || "null"), isLoading: false }

export const counterSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
      return state
    },
    setUsers: (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      localStorage.users = JSON.stringify(payload);
      return state
    },
    addUser: (state, { payload }) => {
      state.data.push(payload);
      state.isLoading = false;
      localStorage.users = JSON.stringify(state.data);
      return state
    },
    updateUser: (state, { payload }) => {
      const userIndex = state.data.findIndex(user => user.id === payload.id);
      state.data[userIndex] = { ...state.data[userIndex], ...payload };
      state.isLoading = false;
      localStorage.users = JSON.stringify(state.data);
      return state
    },
    deleteUser: (state, { payload }) => {
      state.data = state.data.filter(user => user.id !== payload);
      state.isLoading = false;
      localStorage.users = JSON.stringify(state.data);
      return state
    },
  },
})

export const { addUser, updateUser, deleteUser, setLoading, setUsers } = counterSlice.actions

export default counterSlice.reducer