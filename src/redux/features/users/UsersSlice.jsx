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

const UsersSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {},

  extraReducers: (builder) => {
    
    builder
      .addCase(fetchUsers.pending, (state, action)) => {
  state.status = "Loading...";
  
}

.addCase(fetchUsers.fulfilled, (state, action)) => {
  state.status = "succeeded";
state.users = action.payload;
}

.addCase(fetchUsers.rejected, (state, action)) => {
  state.status = "failed";
  state.error = action.error.message;
}

  },
});

export default UsersSlice.reducer;
