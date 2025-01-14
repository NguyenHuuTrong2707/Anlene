import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WarningState {
  message: string;
}

const initialState: WarningState = {
  message: "",
};

const warningSlice = createSlice({
  name: "warning",
  initialState,
  reducers: {
    setWarningMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { setWarningMessage } = warningSlice.actions;
export default warningSlice.reducer;
