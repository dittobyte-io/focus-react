import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
	name: "auth",
	initialState: { userData: null, token: null, message: null },
	reducers: {
		setCredentials: (state, { payload: { message, token, data } }) => {
			state.userData = data;
			state.token = token;
			state.message = message;
		},
	},
});

// Action creators will be generated for each reducer function
export const { setCredentials } = AuthSlice.actions;

export default AuthSlice.reducer;
