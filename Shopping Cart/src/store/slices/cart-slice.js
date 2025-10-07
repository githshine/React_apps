import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

// createSlice() 返回一个 slice 对象
//        （里面有 .reducer 和 .actions 等）。
// counterSlice.reducer 是一个函数 (state, action) => newState
// counterSlice.actions 是一个包含 increment/decrement 的对象 (action creators)
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log('action:', action);
      console.log('action.payload:', action.payload);
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      console.log('action:', action);
      console.log('action.payload:', action.payload);
      // state.push(action.payload);
      //  return 这个词很关键！！
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
