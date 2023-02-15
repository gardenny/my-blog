import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.isLogin = true;
      localStorage.setItem('login', true);
    },
    logout: state => {
      state.isLogin = false;
      localStorage.setItem('login', false);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
