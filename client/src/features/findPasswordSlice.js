import { createSlice } from "@reduxjs/toolkit";

const findPasswordSlice = createSlice({
  name: "findPassword",
  initialState: {
    nickname: "",
    email: "",
  },
  reducers: {
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setNickname, setEmail } = findPasswordSlice.actions;

export const selectFindPwd = (state) => state.findPassword;

export default findPasswordSlice.reducer;
