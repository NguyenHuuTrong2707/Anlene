import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WarningState {
  message: string;
  url: string,
}

const initialState: WarningState = {
  message: "",
  url : "",
};

const warningSlice = createSlice({
  name: "warning",
  initialState,
  reducers: {
    setWarningMessage: (state, action: PayloadAction<{ message: string; url: string }>) => {
      state.message = action.payload.message;
      state.url = action.payload.url;
    },
  },
});

export const { setWarningMessage } = warningSlice.actions;
export default warningSlice.reducer;
