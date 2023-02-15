import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toast: '',
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (state, action) => {
      state.toast = action.payload;
    },
    deleteToast: state => {
      state.toast = '';
    },
  },
});

// console.log(toastSlice.actions.addToast({ type: 'success', text: '성공' }));
export const { addToast, deleteToast } = toastSlice.actions;
export default toastSlice.reducer;
