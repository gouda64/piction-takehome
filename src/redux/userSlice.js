import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const initialState = {
    forUser: false, //false,
    name: "Bob",
    dob: new dayjs("1990-01-01"),
    issue: "I have a massive headache",
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setForUser: (state, action) => {
      state.forUser = action.payload
    },
    setName: (state, action) => {
      state.name = action.payload
    },
    setDob: (state, action) => {
      state.dob = action.payload
    },
    setIssue: (state, action) => {
      state.issue = action.payload
    },
  }
})

export const { setForUser, setName, setDob, setIssue } = userSlice.actions;

export default userSlice.reducer