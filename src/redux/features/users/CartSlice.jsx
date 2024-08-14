import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// COMMENT-1
/*created a async thunk function (action-type-string, callback-function)*/
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = res.json();
  return data;
});

// COMMENT-2
/* created a slice with name of UsersSlice with createSlice() function which contains name, initialstate, reducers, extrareducers.

syntax:- 
const var_name = createSlice({
name: '',
initialState: {},
reducers: {},
extraReducers: (argument) => {
  argument
  .addCase(thunk_function-action, (state,action)) => {}

  }
});  */

const CartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    addRemove(state, action) {
      state = state.filter(item) => item.id !==action.payload;
    },
  },
});

export const { addProduct, addRemove } = CartSlice.actions;
export default CartSlice.reducer;