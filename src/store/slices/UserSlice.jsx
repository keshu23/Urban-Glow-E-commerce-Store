import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducer: {
    addUser() {},
    removeUser() {},
    deleteUsers() {},
  },
});

console.log(userSlice.actions);

export default userSlice.reducer;
